import { Route, Routes } from "react-router-dom";
import { GoalList, GoalDetails }  from "./Components/App/Pages/Goals/Goals";
import Home from './Components/App/Pages/Home-/Home';
import Greeting   from './Components/App/Pages/Greeting/Greeting';
import Talle from './Components/App/Pages/Talle/Talle';
import Kontaktformular from './Components/App/Pages/Kontaktformular/Kontaktformular';
import FormElements from "./Components/App/Pages/Formelement/FormElements";
import Counter from "./Components/App/Pages/Counter/Counter";
import Notfound from "./Components/App/Pages/Not Found/Notfound";

import Header from './Components/partials/Header/Header'
import Footer from './Components/partials/Footer/Footer'

// All our Router is in App.jsx

const App = () => {
  return (
    <div className = "App">
    <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          {/* This index our loaclhost */}

          <Route path="/goals">
          <Route index element={<GoalList />} />
          <Route path=":id" element={<GoalDetails />} />
          {/* <Home /> */}
          <Greeting />
          <Talle />
          <Kontaktformular />
          <FormElements />
          <Counter />
          </Route>

          <Route path="*" element={<Notfound />} />
          {/* This is our 404 page, when page not found. */}
          </Routes>
     </main>
     <Footer />
    </div>
    
   
   
  );
}

export default App;
