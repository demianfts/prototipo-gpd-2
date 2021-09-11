import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBarLogged extends Component {
    render(){
        return(
            <header>
      <section className=" uk-container uk-container-large px-4">
        <div className="">
        <nav className="navbar navbar-expand-lg navbar-light px-4 mx-5" style={{backgroundColor: "#ededed"}}>
        <div className="container-fluid">
                  <Link className="navbar-brand px-2 pt-2" to="/"><img src="https://i.ibb.co/4ghFrtT/logo2.png" alt="logo" border="0" width="120" height="50"></img></Link>
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
                              
                            </ul>
                            

                            <form className="d-flex">
                              
                            <Link to="/MiCuenta"><button className="btn btn-outline-success" type="submit">Mi Cuenta</button></Link>
                              <button className="btn btn" type="submit" onClick={this.props.triggerLogoutUpdate}>Cerrar sesión</button>
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

export default NavBarLogged;