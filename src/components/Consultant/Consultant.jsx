import React, {useEffect, useRef, useState} from "react";
import styles from "./Consultant.module.scss"
import {Support} from "../../assets/Support";
import {Cross} from "../../assets/Cross";
import {Send} from "../../assets/Send";
import Message from "./Message/Message";

const Consultant = () => {
	const [opened, setOpened] = useState(false);
	
	const [messages, setMessages] = useState([]);
	const [value, setValue] = useState('');
	const socket = useRef();
	
	function connect() {
		const session_id = 2;
		socket.current = new WebSocket(`wss://api.trickstertrust.ru/ws/chat/?session_id=${session_id}`);
		
		// отработает в момент подключения
		socket.current.onopen = () => {
			socket.current.send(JSON.stringify({"request": "history"}));
		}
		// отработает в момент получения сообщения
		socket.current.onmessage = (event) => {
			const message = JSON.parse(event.data);
			
			// если история, то добавь её. Если сообщение от гпт, то создай объект и добавь его
			if (message["messages"]) {
				setMessages(prev => [...prev, ...message["messages"]])
			} else if (message["answer"]) {
				const time = new Date()
				const messageLocal = {
					role: true,
					content: message["answer"],
					time: `${time.getHours()}:${time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()}`
				}
				setMessages(prev => [...prev, messageLocal])
			}
		}
		// отработает, когда подключение закрылось
		socket.current.onclose = () => {
		}
		// отработает, когда произошла ошибка
		socket.current.onerror  = (e) => {
			console.log('Socket произошла ошибка', e)
		}
	}
	
	// при отправке сообщения
	const sendMessage = async (e) => {
		e.preventDefault();
		
		// если сообщение > 0, то создай объект, добавь его в state и отправь на сервер + обнули input
		if (value.length > 0) {
			const time = new Date();
			const messageLocal = {
				role: false,
				content: value,
				time: `${time.getHours()}:${time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()}`
			};
			const message = {
				message: value
			};
			
			setMessages(prev => [...prev, messageLocal]);
			socket.current.send(JSON.stringify(message));
			setValue('');
		}
	}
	
	// При клике на Enter
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			sendMessage(e);
		}
	};
	
	// При клике на кнопку открытие ассистента
	const supportBtn = () => {
		setOpened(true);
		connect();
	}
	// При клике на закрытие ассистента
	const closeBtn = () => {
		socket.current.send(JSON.stringify({"request": "disconnect"}));
		setOpened(false);
	}
	
	// блок, до которого будет скролл(после всех сообщений)
	const messagesEndRef  = useRef(null);
	// срабатывает при изменение messages, если чат закрыт, то не выполнять
	useEffect(() => {
		if (messagesEndRef.current !== null) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [messages]);
	
	return (
		<div className={styles.consultant}>
			{opened ?
				<div className={styles.chat}>
					<div onClick={closeBtn} className={styles.close}>
						<Cross/>
					</div>
					<div className={styles.body}>
						<div className={styles.top}>
							<div className={styles.imageConsultant}>
								<img src="../img/icons/consultant.svg" alt="consultant"/>
							</div>
							<div className={styles.info}>
								<h6>GPT</h6>
								<span>consultation</span>
							</div>
						</div>
						<div className={styles.main}>
							<h4>Добрый день!</h4>
							<div className={styles.messages}>
								{messages.map((item, index) => (
									item.time && item.content &&
									<Message key={index}
									         role={item.role ? 'Ассистент' : 'Вы'}
									         time={item.time.split(' ')[0]}
									         content={item.content}
									/>
								))}
								<div ref={messagesEndRef} />
							</div>
						</div>
						<div className={styles.bottom}>
							<form onSubmit={sendMessage}>
								<input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Напишите сообщение..."/>
								<button onKeyPress={handleKeyPress} type="submit"><Send/></button>
							</form>
						</div>
					</div>
				</div>
				:
				<div onClick={supportBtn} className={styles.image}>
					<Support/>
				</div>
			}
		</div>
	)
}

export default Consultant;