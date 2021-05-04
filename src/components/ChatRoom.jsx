import React, { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";

const ChatRoom = ({ db, auth, firebase }) => {
	const [formValue, setFormValue] = useState("");

	const msgRef = db.collection("messages");
	const query = msgRef.orderBy("createdAt").limit(50);

	//* useCollectionData looks for teh realtime updates for the query
	const [messages] = useCollectionData(query, { idField: "id" });

	const dummyRef = useRef();

	const sendMessage = async (e) => {
		e.preventDefault();

		if (formValue === "") return alert("Please type something...");

		const { uid, photoURL } = auth.currentUser;

		await msgRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL,
		});

		setFormValue("");

		//* scrolling to the bottom
		dummyRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<main>
				{messages &&
					messages.map((msg) => (
						<ChatMessage key={msg.id} message={msg} auth={auth} />
					))}

				<div ref={dummyRef}></div>
			</main>

			<form onSubmit={sendMessage}>
				<input
					value={formValue}
					onChange={(e) => setFormValue(e.target.value)}
					type="text"
				/>

				<button type="submit">Send</button>
			</form>
		</>
	);
};

export default ChatRoom;
