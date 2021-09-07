
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
                <button id="button">Hola</button>    
                    
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
                <h1 id="title">

                </h1>
                <div id="cards">   
                

                </div>
            

           </div>
         )
     };
}

export default Main

