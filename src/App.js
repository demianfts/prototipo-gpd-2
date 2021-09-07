
import React from 'react';





import Main from './components/Main'
function App() {
  return (
<React.Fragment>
  <div className="App">
    <header>
      <section class=" uk-container uk-container-large">
        <div class="">
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#ededed"}}>
        <div class="container-fluid">
                  <a class="navbar-brand" href="#"><img src="./img/logo.png" width="70" height="70"></img></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Shop</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Programa de Loyalty</a>
                              </li>
                            </ul>

                            <form class="d-flex">
                              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                              <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                  </div>
          </div>
          </nav>
            
        </div>
      </section> 
    </header> 
   

   



    <div>
        
    
        <Main/>
        

        
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    
    

    <footer >
       {/*<ul>
           <li><a href="https://www.instagram.com" >Instagram </a></li>
            <li><a href="https://www.facebook.com"> Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
       </ul> */}
        <ul>
            <li><a href = "https://www.instagram.com/demianlazarte/?hl=es-la"> Demián Lazarte </a></li>
        </ul>
  
    </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  </div>
</React.Fragment>  
  );
}

export default App;

