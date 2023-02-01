
import { useState } from "react"
import { post } from "axios"
import perfil from "../assets/images/perfil.png"
import styles from "../assets/css/styles.css"
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

function Register2() {

    const redirect = useNavigate();

    const mnsj = () => {
        swal({
            title: 'Successful',
            text: 'Redirected to login',
            icon: 'success',
            button: 'Accept',
        })
    }

    const bad_mnsj = () => {
        swal({
            title: 'Unsuccessful',
            text: 'Registration error',
            icon: 'error',
            button: 'Accept',
        })
    }

    const enviar = (url) => {

        post(url, {'username':username, 'password':password, 'password2':password2, 
            'email':email, 'first_name':firstName, 'last_name':lastName,})
        .then(function (response) {
            mnsj()
            redirect('/login', { replace: false })
        })
        .catch(function (error) {
            bad_mnsj()
            console.log(error);
        });
    }

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();

    
    function mostrar() {
        var tipo1 = document.getElementById("exampleInputPassword1");
        var tipo2 = document.getElementById("exampleInputPassword2");

        if(tipo1.type === "password"){
            tipo1.type = "text";
            tipo2.type = "text";
        } 
        else{
            tipo1.type = "password";
            tipo2.type = "password";
        }
        return tipo1.type, tipo2.type
    }

    return(
        <div className="modal-dialog text-center">
            <br/>
            <div className="col-sm-12 container ">
                <div className="modal-content mb-3 col-sm-12">
                <br/>
                <h3 className="mb-4 mt-3">Register</h3>

                    <div className="row mt-1">
                        <div className="col pr-0">
                            <form className="col-12">

                                <div className="mb-3 ">
                                    <label className="form-label">First name</label>
                                    <input type='text' placeholder='first name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        onChange={e => setFirstName(e.target.value)}></input>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Company</label>
                                    <input type='text' placeholder='company' className="form-control" id="exampleInputEmail1" 
                                        onChange={e => setEmail(e.target.value)}></input>
                                </div>

                                <div className="mb-3 ">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type='password' placeholder='password' className="form-control" id="exampleInputPassword1"
                                        onChange={e => setPassword(e.target.value)}></input>
                                </div>

                                <div className="mb-3 ">
                                <input type="button" onClick={ () => mostrar() } value="Mostrar contraseña" />
                                </div>

                            </form>
                        </div>

                        <div class="col pl-0">
                            <form className="col-12">

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Last name</label>
                                    <input type='text' placeholder='last name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        onChange={e => setLastName(e.target.value)}></input>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Username</label>
                                    <input type='text' placeholder='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        onChange={e => setUsername(e.target.value)}></input>
                                </div>

                                <div className="mb-3 ">
                                    <label for="exampleInputPassword1" class="form-label">Confirm password</label>
                                    <input type='password' placeholder='password' className="form-control" id="exampleInputPassword2"
                                        onChange={e => setPassword2(e.target.value)}></input>
                                </div>
                        
                            </form>
                        </div>

                    </div>


                    <br/>
                
                    <button type="submit" className="btn btn-success boton col-sm-5 align-self-center" 
                        onClick={ () => enviar('http://localhost:8000/api/v2/register/')}>
                        Registrarse
                    </button>
                    
                    <div className="mb-4 ">
                        <Link to='/login'> login</Link>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Register2;