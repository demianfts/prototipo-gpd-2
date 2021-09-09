import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            value: false
        }
    }


    inputHandler(){
        if(this.state.value == false){
        this.setState({value: true})
        } else {
            this.setState({value: false})
        }
    }

    registroLoyalty(){
        const isRegistered = this.state.value;
        if(isRegistered == true){
        return("/ProgramaDeLoyalty")
        } else {
            return("/")
        }
    }

    render(){
        return(
            <div>
                <div className="container px-4">
                    <div className="col px-4 mx-3">
                    <h1>Registro</h1>
                    <p>Por favor, completá los siguientes datos para crear tu cuenta.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form className="px-4">
                            <div class="mb-4">
                                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    {/*<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>*/}
                                </div>
                                <div class="mb-4">
                                    <label for="exampleInputPassword1" class="form-label">Email</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                </div>
                                <div class="mb-4">
                                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                </div>
                                <div class="mb-4 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" value={this.state.value} onChange={this.inputHandler.bind(this)}></input>
                                    <label class="form-check-label" for="exampleCheck1">Suscribirme al Programa de Loyalty Babylon</label>
                                </div>
                                <div class="mb-4 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                    <label class="form-check-label" for="exampleCheck1">He leído y acepto los términos y condiciones</label>
                                </div>
                            </form>
                        </div>
                        <div className="col">
                            <form className="px-4">
                            <div class="mb-4">
                                    <label for="exampleInputEmail1" class="form-label">Apellido</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    {/*<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>*/}
                                </div>
                                <div class="mb-4">
                                    <label for="exampleInputPassword1" class="form-label">Teléfono</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                </div>
                                <div class="mb-4">
                                    <label for="exampleInputPassword1" class="form-label">Confirmar Contraseña</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                </div>
                            </form>
                            
                        </div>
                        < hr />
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-primary me-md-2" type="button"><Link class="nav-link" to={this.registroLoyalty.bind(this)}>Registrarse</Link></button>
                        </div>

                    </div>
                   
                </div>

            </div>


        )
    }
}

export default SignUp