import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProgramaDeLoyalty extends Component {
    render(){
        return (
            <div className="Main">
                <div className="container1">
                    <div className="card" id="bienvenidaPrograma">
                     <div className="card-body text-center">
                        <h1>Bienvenido al programa de Loyalty Babylon</h1>
                        <h6 className="pb-3">Ya sos parte de nuestro programa de Loyalty! Conocé los beneficios y descuentos que tenemos para vos</h6>
                        <Link to="/Beneficios" className="btn btn-primary">Ver beneficios</Link>
                        
                     </div>
                    </div>
                    </div>

                    <div className="container2">
                        <div className="col-md-5"> 
                            <div className="card" id="reclamaPuntos">
                            <div className="card-body">
                                <h5>Reclama tus puntos</h5>
                                <p className="card-text">Por ser parte, ya tenés 500 puntos. Entrá a la sección Mi Cuenta para seguir sumando.</p>
                                <Link to="/MiCuenta" className="btn btn-primary">Ir a mi cuenta</Link>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="card" id="eventosActividades">
                            <div className="card-body">
                                <h5 className="card-title">Conocé nuestros próximos eventos y actividades</h5>
                                <p className="card-text">Charlas, eventos y actividades ideales para vos. Conocé las próximas fechas y participá.</p>
                                <a href="#" className="btn btn-primary">Conocé más</a>
                            </div>
                            </div>
                        </div>

                    </div>
                


        </div>



        )
    }
}

export default ProgramaDeLoyalty;