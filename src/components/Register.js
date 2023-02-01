
import { useState } from "react"
import { post } from "axios"
import { Link, useNavigate } from "react-router-dom";

// ESTE REGISTER NO FUNCIONA

function Register() {

    const redirect = useNavigate();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const enviar = (url) => {

        post(url, {'username':username, 'email':email, 'password':password})
        .then(function (response) {
            redirect('/login')
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <div>
            <h3>Username</h3>
            <input type='text' placeholder='username' onChange={e => setUsername(e.target.value)}></input>
            <br/>
            <h3>Email</h3>
            <input type='text' placeholder='email' onChange={e => setEmail(e.target.value)}></input>
            <br/>
            <h3>Password</h3>
            <input type='password' placeholder='password' onChange={e => setPassword(e.target.value)}></input>

            <br/>
            <button onClick={ () => enviar('http://localhost:8000/api/v1/register/')}>
                Register
            </button>

        </div>
    )
}

export default Register;