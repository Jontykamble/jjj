
import './App.css';
import Home from './screeen/Home';
import {BrowserRouter as Router,Routes,Route,Link}
from "react-router-dom"
import Loginnn from './screeen/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.esm'
import Signup from './screeen/Signup';
import { CardProvider } from './components/ContextReducer';


function App() {
  return (
    <CardProvider>
      
    
      <Router>


<div>
  <Routes>
    <Route path="/home" element={<Home/>}/>
   <Route path="/" element={<Loginnn/>}/>
   <Route path="/createuser" element={<Signup/>}/>
  
   

  </Routes>
</div>



</Router>
    </CardProvider>
    
  )
  
}

export default App;
