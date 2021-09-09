import React, {Component} from 'react';

class ProgramaDeLoyalty extends Component {
    render(){
        return (
            <div className="Main">
                <div className="container1">
                    <div className="card" id="bienvenidaPrograma">
                     <div className="card-body text-start">
                        <h1>Bienvenido al programa de Loyalty Babylon</h1>
                        <h6>Ya sos parte de nuestro programa de Loyalty! Conocé los beneficios y descuentos que tenemos para vos</h6>
                        <a href="#" class="btn btn-primary">Ver beneficios</a>
                        
                     </div>
                    </div>
                    </div>

                    <div className="container2">
                        <div className="col-md-5"> 
                            <div className="card" id="reclamaPuntos">
                            <div className="card-body">
                                <h5 className="card-title">Reclama tus puntos</h5>
                                <p className="card-text">Por ser parte, ya tenés 500 puntos. Entrá a la sección Mi Cuenta para seguir sumando.</p>
                                <a href="#" class="btn btn-primary">Ir a mi cuenta</a>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="card" id="eventosActividades">
                            <div className="card-body">
                                <h5 className="card-title">Conocé nuestros próximos eventos y actividades</h5>
                                <p className="card-text">Charlas, eventos y actividades ideales para vos. Conocé las próximas fechas y participá.</p>
                                <a href="#" class="btn btn-primary">Conocé más</a>
                            </div>
                            </div>
                        </div>

                    </div>
                


        </div>



        )
    }
}

export default ProgramaDeLoyalty;