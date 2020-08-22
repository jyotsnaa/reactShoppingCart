import React, {useState} from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import {auth} from './Firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

 //login

    const login = (event) =>{
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) =>{
          history.push("/");
        })
        .catch((e) => alert(e.message));
    }

    //register
    const register = (event) =>{
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth =>{

            history.push("/");
        })
        .catch((e) => alert(e.message));
    };

    return (
        <div className ="login">
            <Link to="/">
            <img
            className="login_logo"
            src="http://pngimg.com/uploads/ebay/ebay_PNG20.png"
            alt=""
       
            />
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                   <input value={email} onChange={event => setEmail(event.target.value)} type="text"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event =>setPassword(event.target.value)} type="password"/>
                    <button onClick={login} className="sigin_btn">Sign In</button>
                </form>
                <p>By Sign in you will agree to our condition If not an account please register</p>

                <button  onClick={register} className="register_btn">Create Account</button>
            </div>
        </div>
    )
}

export default Login;
