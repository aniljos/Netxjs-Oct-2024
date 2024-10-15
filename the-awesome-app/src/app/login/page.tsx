'use client'

import { useState, MouseEvent } from "react";

function LoginPage(){


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function signin(evt: MouseEvent){

        evt.preventDefault();
        console.log("in signin..");


    }

    return (
        <div>
            <h4>Login</h4>

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