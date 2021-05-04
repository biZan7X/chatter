import React from "react";

const SignIn = ({ auth, firebase }) => {
	const signInWithGoogle = () => {
		auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	};
	return (
		<>
			<button className="sign-in" onClick={signInWithGoogle}>
				Sign in with Google
			</button>
			<p>
				Do not violate the community guidelines or you will be banned for
				life!
			</p>
		</>
	);
};

export default SignIn;
