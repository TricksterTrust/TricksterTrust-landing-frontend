import React from "react"
import styles from "./Card.module.scss"

const Card = ({card}) => {
	return (
		<div className={styles.card}>
			<h3>{card.title}</h3>
			<p className={styles.text}>{card.text}</p>
			<div className={styles.descr}>
				<div className={styles.info}>
					<div style={{backgroundColor: `#${card.mainColor}`}} className={styles.for}>Для покупок</div>
					<h4>{card.descrTitle}</h4>
					<p>{card.descrText}</p>
					<div className={styles.advantages}>
						{card.advantages.map((item, index) => (
							<div key={index} className={styles.advantage}>
								<h5>{item.title}</h5>
								<p>{item.text}</p>
							</div>
						))}
					</div>
					<div className="btn">Оформить карту</div>
				</div>
				<div className={styles.image}>
					<img src={card.imgUrl} alt=""/>
				</div>
			</div>
			<div className="form">
				<div className="formContainer">
					<div className={`formContent ${styles.formContent}`}>
						<div className={styles.image}>
							<img src={card.formImgUrl} alt=""/>
						</div>
						<form action="">
							<div className="top">
								<input placeholder="Фамилия, имя и отчество*" type="text"/>
								<div className="row">
									<input placeholder="Мобильный телефон*" type="text"/>
									<input placeholder="Электронная почта" type="text"/>
								</div>
								<input placeholder="Дата рождения*" type="text"/>
							</div>
							<div className="bottom">
								<p className="confidentiality">
									Заполняя форму, я принимаю <span>условия передачи информации</span>
								</p>
								<button className="btn formBtn">Оформить</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card;