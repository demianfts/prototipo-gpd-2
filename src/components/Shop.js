import React, {Component} from 'react';

class Shop extends Component {
    render(){
        return (

            <div>
                <div className="container px-4 mt-4">
                    <div className="col px-4 mx-4 mb-4 d-flex flex-col align-items-center justify-content-center">
                    <h1>Nuestros productos</h1>
                    
                    </div>
                </div>
            

            <div className="container mb-5">
                    <div className="card-group px-5">
                        <div className="card mx-3" id="productosRecomendados">
                            <img src="./img/Babyarcan.png" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                            <h4>Babylon Nutrition Classic</h4>
                            <p className="card-text">Leche modificada en polvo <b>sin azúcar</b> para niños a partir de los 0-6 meses. <br/> Libre de gluten.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card mx-3" id="productosRecomendados">
                            <img src="./img/Babyhccan.png" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                            <h4>Babylon Nutrition Sabores</h4>
                            <p className="card-text">Leche modificada en polvo <b>sin azúcar</b> para niños de 1 a 4 años. Sabor vainilla y frutilla. Libre de gluten</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card mx-3" id="productosRecomendados">
                            <img src="./img/Babypscan.png" className="card-img-top" alt="..."></img>
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
    }
}

export default Shop;