
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
                
                <div class="container1">
                <div class="card" id="portada">
                <div class="card-body">
                
                        <div className="d-flex flex-row justify-content-evenly">
                        <div className="col-6 px-4 pt-5">
                        <h1 className="pb-2" id="portadaBienvenida">Conocé nuestro programa de Loyalty</h1>
                        <h6 className="pb-3">Sumá puntos y obtené descuentos, beneficios, vouchers, acceso a eventos exclusivos y mucho más..</h6>
                        
                        <Link to="/SignUp" class="btn btn-primary">Registrate</Link>
                        </div>
                        
                        <div className="col"></div>
                        <img src="./img/mockupbaby.png" width="500px" height="350"alt="..."></img>
                        </div>
                     
                    
                
                </div>
                </div>
                    
                
                </div>
                <div className="container2">
                    <h1 id="title">
                    Productos recomendados
                    </h1>
                </div>
                <div className="container mb-5">
                    <div class="card-group px-5">
                        <div class="card mx-3">
                            <img src="./img/BABYARCAN.png" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <h5 class="card-title">Babylon Nutrition 1-4</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card mx-3">
                            <img src="./img/BABYHCCAN.png" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <h5 class="card-title">Babylon Nutrition Sabores</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card mx-3">
                            <img src="./img/BABYPSCAN.png" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <h5 class="card-title">Babylon Nutrition Premium</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>






                </div>   
                
            

           </div>
         )
     };
}

export default Main

