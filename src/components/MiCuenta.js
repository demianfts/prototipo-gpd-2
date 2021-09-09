import React, {Component} from 'react';

class MiCuenta extends Component {
    render(){
        return(
            <div className="container px-5" id="contenedorMiCuenta">
                <div className="row">
                    <div className="col-3">
                        <div className="card h-100" id="Usuario">
                            <div className="card-body">
                                <div className="container pt-5 pb-5" >
                                    <div className="col" id="containerData">
                                    <div className="col">
                                        <img src="./img/icon.png" alt="..." width="100" height="100"></img>
                                    </div>
                                    <div className="col">
                                        <h1>Usuario</h1>
                                        <h5>Nivel 1</h5>
                                    </div>
                                    </div>
                                    </div>
                                < hr/>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <p>Mis puntos</p>
                                            <h1>500</h1>
                                        </div>
                                        <div className="col">
                                            <p>Compras</p>
                                            <h1>0</h1>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="card h-75" id="Activity">
                            <div className="card-body">
                                <h2>Mi actividad</h2>
                                < hr />
                            </div>
                        </div>
                        <div className="card" id="Encuesta">
                            <div className="card-body">
                                <h2>Completá nuestra encuesta y sumá puntos</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default MiCuenta