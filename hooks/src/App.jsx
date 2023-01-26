import { Route, Routes } from "react-router-dom";
import { Goals, GoalDetails }  from "./Components/App/Pages/Goals/Goals";
import Home from './Components/App/Pages/Home-/Home';
import Greeting   from './Components/App/Pages/Greeting/Greeting';
import Talle from './Components/App/Pages/Talle/Talle';
import Kontaktformular from './Components/App/Pages/Kontaktformular/Kontaktformular';
import FormElements from "./Components/App/Pages/Formelement/FormElements";
import Counter from "./Components/App/Pages/Counter/Counter";
import Notfound from "./Components/App/Pages/Not Found/Notfound";

import Header from './Components/partials/Header/Header'
import Footer from './Components/partials/Footer/Footer'



const App = () => {
  return (
    <div className = "App">
    <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/goals">
          <Route index element={<Goals />} />
          <Route path=":id" element={<GoalDetails />} />
          </Route>

          <Route path="*" element={<Notfound />} />
          </Routes>
        
      <Home />
      <Greeting />
      <Talle />
      <Kontaktformular />
      <FormElements />
      <Counter />
     </main>
     <Footer />
      
    </div>
    
   
   
  );
}

export default App;
