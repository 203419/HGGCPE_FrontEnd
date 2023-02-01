import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register2 from './components/Register2'
import Login from './components/Login';
import Home from './components/Home';
import Analisis from './components/Analisis_diseño';
import Rastreo from './components/Rastreo';
import Pruebas from './components/Pruebas';
import Requisitos from './components/Requsitos';
import Unitarias from './components/Unitarias';
import styles from "./assets/css/styles.css"

function App() {
  return (

    <body>
      <nav class="navbar navbar-dark ">
        <div class="container-md text-primary">
          <h2 class="mb-0 "> <span>HGGCP</span></h2>
          <form class="d-flex">
          
            <a class="btn btn-outline-light" type="submit" href='/login' >Log Out</a>
          </form>
        </div>
      </nav>

      <br/>

      <Router>
      <div>
        <Routes>
          <Route path="/unitarias" element={<Unitarias/>}>
          </Route>

          <Route path="/requisitos" element={<Requisitos/>}>
          </Route>
          
          <Route path="/pruebas" element={<Pruebas/>}>
          </Route>

          <Route path="/rastreo" element={<Rastreo/>}>
          </Route>

          <Route path="/analisis" element={<Analisis/>}>
          </Route>

          <Route path="/login" element={<Login/>}>
          </Route>

          <Route path="/register" element={<Register2/>}>
          </Route>

          <Route  path="/" element={<Home/>}>
          </Route>
          
        </Routes>
      </div>
    </Router>
    <br/>
    <br/>

    </body>
  );
}

export default App;
