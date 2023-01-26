
import './App.scss';
// import CustomRouter from './Components/App/CustomRouter/CustoRouter';
import{ BrowserRouter } from "react-router-dom"
import Greeting from './Components/App/Pages/Greeting/Greeting';
import Talle from './Components/App/Pages/Talle/Talle';
import Kontaktformular from './Components/App/Pages/Kontaktformular/Kontaktformular';
import FormElements from './Components/App/Pages/Formelement/FormElements';
import  Counter  from './Components/App/Pages/useEffect/Counter';
import { GoalList } from './Components/App/Pages/Goals/Goals';
import Home from './Components/App/Pages/Home/Home';
import Header from './Components/partials/Header/Header';
import Footer from './Components/partials/Footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
    <div className = "App">
    <Header />
      <main>
        
      <Home />
      <Greeting />
      <Talle />
      <Kontaktformular />
      <FormElements />
      <Counter />
      <GoalList />
     </main>
     <Footer />
      
    </div>
    </BrowserRouter> 
   
   
  );
}

export default App;
