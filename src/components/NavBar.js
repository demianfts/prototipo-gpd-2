import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <header>
      <section className=" uk-container uk-container-large px-4">
        <div className="">
        <nav className="navbar navbar-expand-lg navbar-light px-4 mx-5" style={{backgroundColor: "#ededed"}}>
        <div className="container-fluid">
                  <a className="navbar-brand px-2 pt-2" href="#"><img src="./img/logo2.png" width="120" height="50"></img></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="/Shop">Shop</Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="/ProgramaDeLoyalty">Programa de Loyalty</Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="/MiCuenta">Mi cuenta</Link>
                              </li>
                            </ul>
                            

                            <form className="d-flex">
                              
                            <Link to="/SignUp"><button className="btn btn-outline-success" type="submit">Registro</button></Link>
                              <button className="btn btn" type="submit">Login</button>
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