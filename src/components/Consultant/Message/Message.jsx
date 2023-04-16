import React from "react";
import styles from "./Message.module.scss"

const Message = ({role, time, content}) => {
	return (
		<div className={styles.message}>
			<h6>{role}</h6>
			<div className={styles.messageBody}>
				<p>{content}</p>
				<span>{time}</span>
			</div>
		</div>
	)
}

export default Message;