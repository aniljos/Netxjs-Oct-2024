'use client'

import { useState, MouseEvent, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function LoginPage(){


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const userNameInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        userNameInputRef.current?.focus();
    }, []);


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
                router.push("/products");

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
                    <input ref={userNameInputRef} id="name" className="form-control" value={userName} 
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