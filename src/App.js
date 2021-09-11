
import React, {Component} from 'react';
import NavBar from './components/NavBar'
import NavBarLogged from './components/NavBarLogged'
import Main from './components/Main';
import Shop from './components/Shop';
import SignUp from './components/SignUp'
import MiCuenta from './components/MiCuenta';
import Beneficios from './components/Beneficios'

import ProgramaDeLoyalty from './components/ProgramaDeLoyalty';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';





class App extends Component{
  constructor(){
    super();
    this.state={
      registrado:false,
      inDataBase:false
    }
  }

  estaRegistrado () {
    this.setState({registrado: !this.state.registrado});
    this.setState({inDataBase: true})
  }
  inicioSesion(){
    if(this.state.inDataBase===true){
      this.setState({registrado: true})
    }
  }
  cerroSesion(){
    this.setState({registrado: false})
  }

  ahoraRegistrado(){
    if(this.state.registrado===false){
      return(
      <NavBar triggerLoginUpdate={this.inicioSesion.bind(this)} logged={this.state.inDataBase}/>
      )
    } else {
      return(
        <NavBarLogged triggerLogoutUpdate={this.cerroSesion.bind(this)}/>
      )
    }
  }



render(){

  return (
    <React.Fragment>
      <Router>
        <div className="App">
          
          {this.ahoraRegistrado()}

        <div className="content">

          <Switch>

            <Route exact path="/">
              <Main/>
            </Route>

            <Route exact path="/prototipo-gpd-2">
              <Main/>
            </Route>

            <Route exact path="/Shop">
              <Shop/>
            </Route>

            <Route exact path="/ProgramaDeLoyalty">
              <ProgramaDeLoyalty/>
            </Route>

            <Route exact path="/SignUp">
              <SignUp triggerRegisterUpdate={this.estaRegistrado.bind(this)}/>
            </Route>

            <Route exact path="/MiCuenta">
              <MiCuenta/>
            </Route>

            <Route exact path="/Beneficios">
              <Beneficios/>
            </Route>

          </Switch>

        </div>

        <footer >
          
            <ul>
              <li>Squad 2 - GPD II turno tarde</li>
            </ul>
      
        </footer>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        </div>

      </Router>
    </React.Fragment>  
  );
      }
}

export default App;

