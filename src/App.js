
import React, {Component} from 'react';
import NavBar from './components/NavBar'
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
      registrado:false
    }
  }




render(){

  return (
    <React.Fragment>
      <Router>
        <div className="App">
          < NavBar />

        <div className="content">

          <Switch>

            <Route exact path="/">
              <Main/>
            </Route>

            <Route exact path="/Shop">
              <Shop/>
            </Route>

            <Route exact path="/ProgramaDeLoyalty">
              <ProgramaDeLoyalty/>
            </Route>

            <Route exact path="/SignUp">
              <SignUp/>
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

