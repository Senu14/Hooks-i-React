
import './App.scss';
// import CustomRouter from './Components/App/CustomRouter/CustoRouter';
import{ BrowserRouter } from "react-router-dom"
import Greeting from './Components/App/Pages/Greeting';
import Talle from './Components/App/Pages/Talle';
import Kontaktformular from './Components/App/Pages/Kontaktformular';
import FormElements from './Components/App/Pages/Form element/FormElements';
import  Counter  from './Components/App/Pages/useEffect/Counter';

function App() {
  return (
    <BrowserRouter>
    <div className = "App">
      <Greeting />
      <Talle />
      <Kontaktformular />
      <FormElements />
      <Counter />
    </div>
    </BrowserRouter> 
   
   
  );
}

export default App;
