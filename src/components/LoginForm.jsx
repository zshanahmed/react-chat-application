import { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': '223b04a6-cd55-41e1-b0d7-aea99a4057b2', 'User-Name': username, 'User-Secret': password}

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Oops! Incorrect credentials!')
        }
        // username | password => chatengine -> give messages
        // works out -> logged in
        // error -> try with new username
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat HQ</h1>
                <form onSubmit={handleSubmit} >
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                        <span style={{color: "#FFF"}}>Don't have an account? <Link className="link" to="/signup">Signup</Link> </span>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )

}

export default LoginForm;