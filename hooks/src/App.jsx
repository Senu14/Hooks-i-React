import { Route, Routes } from "react-router-dom";
import { Goals, GoalDetails }  from "./Components/App/Pages/Goals/Goals";
import Home from './Components/App/Pages/Home-/Home';
import Greeting   from './Components/App/Pages/Greeting/Greeting';
import { Kontaktformular, FormElements } from "./Components/App/Pages/Forms/Kontaktformular";
import Notfound from "./Components/App/Pages/Not Found/Notfound";
// import Talle from './Components/App/Pages/Talle/Talle';

// import Counter from "./Components/App/Pages/Counter/Counter";


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
          <Route index element={<Goals />} />
          <Route path=":id" element={<GoalDetails />} />

        
          </Route>
          <Route path="/Greeting" element={<Greeting />} />
          <Route path="/Forms" element={<Kontaktformular />} >
          <Route path="FormOne" element={<FormElements />} />
          {/* <Route path="Formtwo" element={<Kontaktformular />} /> */}
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
