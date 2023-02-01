
import { useState } from "react"
import { post } from "axios"
import perfil from "../assets/images/perfil.png"
import styles from "../assets/css/styles.css"
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';


function Login() {
    let  navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const mnsj = () => {
        swal({
            title: 'Successful',
            text: 'Redirected to Evidences',
            icon: 'success',
            button: 'accept',
        })
    }
    const bad_mnsj = () => {
        swal({
            title: 'Unsuccessful',
            text: 'Login error',
            icon: 'arror',
            button: 'accept',
        })
    }
    const enviar = (url) => {
        post(url, {'username':username, 'password':password})
        .then(function (response) {
            // switch para redireccionar a la pagina correspondiente
            var value_rol = document.getElementById("rol").value;
            switch(value_rol){
                case "1":
                    navigate('/analisis', { replace: false })
                    break;
                case "2":
                    navigate('/rastreo', { replace: false })
                    break;
                case "3":
                    navigate('/requisitos', { replace: false })
                    break;
                case "4":
                    navigate('/pruebas', { replace: false })
                    break;
                case "5":
                    navigate('/unitarias', { replace: false })
                // default:
                //     navigate('/login', { replace: false })
                //     break;
            }
            // navigate('/rastreo', { replace: false })
            mnsj()
            localStorage.setItem('token', response.data['token']);
            localStorage.setItem('id_user', response.data['user_id']);
             localStorage.setItem('username', response.data['username']);
             localStorage.setItem('email', response.data['email']);
             localStorage.setItem('first_name', response.data['first_name']);
             localStorage.setItem('last_name', response.data['last_name']);
        })
        .catch(function (error) {
            console.log(error);
            bad_mnsj()
        });
    }

    function mostrar() {
        var tipo1 = document.getElementById("exampleInputPassword1");

        if(tipo1.type === "password"){
            tipo1.type = "text";
        } 
        else{
            tipo1.type = "password";
        }
        return tipo1.type
    }

    return(
        <div className="container col-md-12">
            <br/>
        <div className="modal-dialog text-center ">
            <div className="col-sm-11 container">
                <div className="modal-content g-2 align-items-center mt-2 ml-1">

                    {/* <div className="col-12 mt-0 mb-1">
                        <img src={perfil} className="imagen"/>
                    </div> */}
                    
                    <br/>
                    <h3 className="mb-4">Login</h3>
                    {/* <br/> */}

                    

                    <div className="mb-4 col-sm-9">
                        <label className="form-label">Username</label>
                        <input type='text' placeholder='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            onChange={e => setUsername(e.target.value)}>
                        </input>
                        
                    </div>
                    <div className="mb-4 col-sm-9">
                        <label  className="form-label">Password</label>
                        <input type='password' placeholder='password' className="form-control" id="exampleInputPassword1"
                            onChange={e => setPassword(e.target.value)}>
                        </input>

                    </div>

                    <div className="mb-4">
                        <input type="button" onClick={ () => mostrar() } value="Mostrar contraseña" />
                    </div>

                    <div className="mb-4 col-sm-9">
                        <label className="form-label">Seleccionar Rol</label>
                        <select id="rol" className="form-select" aria-label="Default select example">
                            <option selected>Choose...</option>
                            <option value="1">Arquitecto de S.</option>
                            <option value="2">Gestor de calidad</option>
                            <option value="3">Product Owner</option>
                            <option value="4">Tester</option>
                            <option value="5">Programador</option>
                        </select>
                    </div>

                    <button className="btn btn-success boton col-sm-5" 
                        onClick={ () => enviar('http://localhost:8000/api/v1/login/')}>
                        Iniciar sesion
                    </button>

                    <div className="mb-3 ">
                        <Link to='/register'> Register</Link>      
                    </div> 
                    <br/>

                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;