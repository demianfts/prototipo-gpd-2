
import React, {Component} from "react";



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
                
                    
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">

                    <div class="carousel-item active">
                    <img src="https://www.nutrilon4.com.ar/media/wysiwyg/Nutrilon_magento_desktop_descuento_1_.png" class="d-block w-100" alt="..."></img>
                    
                    </div>
                    <div class="carousel-item">
                    <img src="https://www.nutrilon4.com.ar/media/wysiwyg/Nutrilon_Sabores_Banner_Desktop.png" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src="https://www.nutrilon4.com.ar/media/wysiwyg/Nutrilon_magento_desktop_envio.png" class="d-block w-100" alt="..."></img>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
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

