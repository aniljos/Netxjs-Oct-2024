'use client'

import { useState, MouseEvent } from "react";
import axios from "axios";

function LoginPage(){


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function signin(evt: MouseEvent){

        evt.preventDefault();
        if(userName && password){
            //validate credentials

            
            const url = "http://localhost:9000/login"
            // axios
            //     .post(url, {name: userName, password})
            //     .then((resp) => {
            //         console.log("sucsess", resp);
            //     }, (error) => {
            //         console.log("error", error)
            //     })

            try {
                
                const resp = await axios.post(url, {name: userName, password});
                console.log("sucsess", resp);
                setMessage("");

            } catch (error) {
                console.log("error", error);
                setMessage("Invalid credentials");
            }
        }
        else{

            setMessage("Enter the credentials");
        }


    }

    return (
        <div>
            <h4>Login</h4>

            {message ? <div className="alert alert-danger">{message}</div> : null }

            <form>
                <div className="form-group">
                    <label htmlFor="name">UserName</label>
                    <input id="name" className="form-control" value={userName} 
                                                    onChange={e => setUserName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Passowrd</label>
                    <input id="password" type="password" className="form-control" value={password} 
                                                    onChange={e => setPassword(e.target.value)}/>
                </div>

                <br/>
                <div>
                    <button  className="btn btn-success" onClick={signin}>Signin</button>
                </div>
            </form>
        </div>
    )
}
export default LoginPage;