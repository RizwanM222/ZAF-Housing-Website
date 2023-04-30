import React, { useEffect, useState } from "react";
import { auth, db } from '../firebase/init';
import { collection, addDoc } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import AuthDetails from "./AuthDetails";
import Home from "../pages/Home";
import { useHistory } from "react-router-dom"

const Login = () => {

    /* WRONG PASSWORD POPUP */

    const [popUpStyle, showPopup] = useState("hide");

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 2000)
    }

    /* WRONG PASSWORD POPUP */

    /* LOGGING IN */

    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useHistory();
  
    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setLoading(false);
            console.log(user);
            if (user) {
                setUser(user);
                navigate.push("/");
            }
        })
    }, []);

    function login() {

        signInWithEmailAndPassword(auth, email, password)
        
            .then(({ user }) => {
                console.log(user)
                setUser(user);
                navigate.push("/");
            })
            .catch((error) => {
                popup()
                setErrorMessage('The address or password was not entered correctly');
                console.log(errorMessage)
            })

    }

    /* LOGGING IN */

    /* LOGGING OUT */
    
    function logout() {
        signOut(auth);
        setUser({});
    }

    /* LOGGING OUT */

    return (

        <section id="login">

            <div className="cover">

                <h1 className="login__title">Login</h1>

                <input type="text" placeholder="Address" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <div className="login__btn" onClick={login}>LOGIN</div>

                <div className={popUpStyle}>
                    <h3>Login Failed</h3>
                    <p>Address or password is incorrect</p>
                </div>

                <AuthDetails />

            </div>

        </section>

    );

}

export default Login;