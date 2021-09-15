
import React, {Component} from "react";
import {Link} from 'react-router-dom';



class Main extends Component{
    constructor(){
        super();
        this.state={
            items: [],
            itemsNuevos:0,
            contador:0,
            value: ""
           
        }
    }

    
            

  
    render(){
        return(
           <div> 
                
                <div className="container1">
                <div className="card" id="portada">
                <div className="card-body">
                
                        {/*<div className="d-flex flex-row justify-content-evenly">
                        <div className="col-6 px-4 pt-5">
                        <h1 className="pb-2" id="portadaBienvenida">Conocé nuestro programa de Loyalty</h1>
                        <h6 className="pb-3">Sumá puntos y obtené descuentos, beneficios, vouchers, acceso a eventos exclusivos y mucho más..</h6>
                        
                        <Link to="/SignUp" className="btn btn-primary">Registrate</Link>
                        </div>
                        
                        <div className="col"></div>
                        <img src="https://i.ibb.co/j3SPJ9f/mockupbaby.png" alt="mockupbaby" border="0" width="500px" height="350"></img>
                        </div>*/}
                     
                     <div class="card" id="portadaGrande">
                        <div class="d-flex flex-row align-items-center justify-content-between">
                        <div className="col-6 px-4 pt-4">
                        <h1 className="pb-2">Conocé nuestro programa de Loyalty</h1>
                        <h6 className="pb-3">Sumá puntos y obtené descuentos, beneficios, vouchers, acceso a eventos exclusivos y mucho más..</h6>
                        <Link to="/SignUp" className="btn btn-primary">Registrate</Link>
                        </div>
                        <div className="col-5">
          
                        <img src="https://i.ibb.co/j3SPJ9f/mockupbaby.png" className="img-fluid" alt="mockupbaby" border="0" width="500px" height="350"></img>
                        </div>
                        </div>
                        </div>
                    
                
                </div>
                </div>
                    
                
                </div>
                <div className="container2">
                    <h1 id="title">
                    Recomendados
                    </h1>
                </div>
                <div className="container mb-5">
                    <div className="card-group px-5">
                        <div className="card mx-3" id="productosRecomendados">
                            <img src="https://i.ibb.co/nPc9w99/ar.png" alt="ar" border="0" className="card-img-top"></img>
                            <div className="card-body">
                            <h4>Babylon Nutrition 1-4</h4>
                            <p className="card-text">Leche modificada en polvo <b>sin azúcar</b> para niños a partir de los 0-6 meses. <br/> Libre de gluten.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card mx-3" id="productosRecomendados">
                            <img src="https://i.ibb.co/bWyjGMP/hc.png" alt="hc" border="0"className="card-img-top"></img>
                            <div className="card-body">
                            <h4>Babylon Nutrition Sabores</h4>
                            <p className="card-text">Leche modificada en polvo <b>sin azúcar</b> para niños de 1 a 4 años. Sabor vainilla y frutilla. Libre de gluten</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card mx-3" id="productosRecomendados">
                            <img src="https://i.ibb.co/SR7f3pv/ps.png" alt="ps" border="0" className="card-img-top"></img>
                            <div className="card-body">
                            <h4>Babylon Nutrition Premium</h4>
                            <p className="card-text">Leche modificada en polvo <b>sin azúcar</b> para niños de 1 a 4 años. Formula avanzada con prebióticos y postbióticos</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>






                </div>   
                
            

           </div>
         )
     };
}

export default Main

