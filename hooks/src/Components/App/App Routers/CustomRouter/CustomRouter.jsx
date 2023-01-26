import { Route, Routes } from "react-router-dom";
import { GoalList }  from "../../Pages/Goals/Goals";
import Home from '../../Pages/Home/Home';
import Greeting   from '../../Pages/Greeting/Greeting';
import Talle from '../../Pages/Talle/Talle';
import Kontaktformular from '../../Pages/Kontaktformular/Kontaktformular';
import FormElements from "../../Pages/Formelement/FormElements";
// import Counter  from "../../Pages/useEffect/Counter";

// import Notfound from "../../Pages/GelLinks/getlink";



const CustomRouter=  () => {
  return (
   <Routes>
    <Route index element={<Home />} />
    <Route path="/goals" element={<GoalList />} />
    <Route path="/Greeting" element={<Greeting />} />"
    <Route path="/Talle" element={<Talle />} />"
    <Route path="/Kontaktformular" element={<Kontaktformular />} />"
    <Route path="/FormElements" element={<FormElements />} />
    <Route path="/Counter" element={<Counter/>} />" 
   
    {/* <Route path="/Getlink" element={<Getlink/>} />"  */}
    
     
   </Routes>
  )
}


export default CustomRouter;