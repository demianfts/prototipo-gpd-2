import React, {Component} from 'react'

class Beneficios extends Component {
    render(){
        return(
            <div>
                    <div>
                     <div className="card-body text-center">
                        <h1>Nivel 1</h1>
                        <h1 className="pb-2">Descuentos y beneficios</h1>
                        <h6 className="pb-3">Felicitaciones! Ya estás en el nivel 1. Con tus puntos obtenés los siguientes beneficios</h6>
                        
                     </div>
                    </div>

                    <div className="container mb-5">
                    <div class="card-group px-5">
                        <div class="card mx-3">
                            {/*<img src="./img/discount.png" class="card-img" alt="..."></img>*/}
                            <div class="card-body">
                            <h2 class="card-title">20% OFF</h2>
                            <p class="card-text">En tu primera compra a través de nuestra página</p>
                            <p class="card-text"><small class="text-muted">Mejorá el beneficio subiendo al nivel 2</small></p>
                            </div>
                        </div>
                        <div class="card mx-3">
                            {/*<img src="./img/activity.png" class="card-img-top" alt="..."></img>*/}
                            <div class="card-body">
                            <h3 class="card-title">Acceso a todas nuestras actividades</h3>
                            <p class="card-text">Eventos, charlas, actividades y más. <br/> Conocé las próximas fechas.</p>
                            <p class="card-text"><small class="text-muted">Exclusivo suscriptores de nuestro programa</small></p>
                            </div>
                        </div>
                        <div class="card mx-3">
                            {/*<img src="./img/truck.png" class="card-img-top" alt="..."></img>*/}
                            <div class="card-body">
                            <h2 class="card-title">Envío gratuito</h2>
                            <p class="card-text">Para compras superiores a $5000.-</p>
                            <p class="card-text"><small class="text-muted">Mejorá el beneficio subiendo al nivel 2</small></p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="mb-5">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>


                    </div>
        )
    }
}

export default Beneficios