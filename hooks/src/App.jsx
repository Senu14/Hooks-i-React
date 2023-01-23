
import './App.scss';
// import CustomRouter from './Components/App/CustomRouter/CustoRouter';
import{ BrowserRouter } from "react-router-dom"
import Greeting from './Components/App/Pages/Greeting';
import Talle from './Components/App/Pages/Talle';
import Kontaktformular from './Components/App/Pages/Kontaktformular';

function App() {
  return (
    <BrowserRouter>
    <div className = "App">
      <Greeting />
      <Talle />
      <Kontaktformular />
    </div>
    </BrowserRouter> 
   
   
  );
}

export default App;
