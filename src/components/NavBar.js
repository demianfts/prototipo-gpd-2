import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <header>
      <section class=" uk-container uk-container-large px-4">
        <div class="">
        <nav class="navbar navbar-expand-lg navbar-light px-4 mx-5" style={{backgroundColor: "#ededed"}}>
        <div class="container-fluid">
                  <a class="navbar-brand px-2 pt-2" href="#"><img src="./img/logo2.png" width="120" height="50"></img></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                              </li>
                              <li class="nav-item">
                                <Link class="nav-link" to="/Shop">Shop</Link>
                              </li>
                              <li class="nav-item">
                                <Link class="nav-link" to="/ProgramaDeLoyalty">Programa de Loyalty</Link>
                              </li>
                              <li class="nav-item">
                                <Link class="nav-link" to="/MiCuenta">Mi cuenta</Link>
                              </li>
                            </ul>
                            

                            <form class="d-flex">
                              
                              <button class="btn btn-outline-success" type="submit"><Link to="/SignUp">Registro</Link></button>
                              <button class="btn btn" type="submit">Login</button>
                            </form>
                            

                            

                            
                  </div>
          </div>
          </nav>
            
        </div>
      </section> 
    </header> 


        );
    }
}

export default NavBar;