import React from "react";
import "./App.css";
//& firebase
import firebase from "./firebase/config";
import { db, auth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
//& components
import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";

const App = () => {
	const [user] = useAuthState(auth);

	const Signout = () => {
		return (
			auth.currentUser && (
				<button className="sign-out" onClick={() => auth.signOut()}>
					Sign Out
				</button>
			)
		);
	};

	return (
		<div className="App">
			<header>
				<h1>Chatter💬</h1>
				<Signout />
			</header>

			<section>
				{user ? (
					<ChatRoom db={db} auth={auth} firebase={firebase} />
				) : (
					<SignIn auth={auth} firebase={firebase} />
				)}
			</section>
		</div>
	);
};

export default App;
