import React, { useEffect } from "react";

const ChatMessage = ({ message, auth }) => {
	const { text, photoURL, uid } = message;

	const msgClass = uid === auth.currentUser.uid ? "sent" : "received";

	return (
		<div className={`message ${msgClass}`}>
			<img src={photoURL} alt="avatar" />
			<p>{text}</p>
		</div>
	);
};

export default ChatMessage;
