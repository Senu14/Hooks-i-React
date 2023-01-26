import { Route, Routes } from "react-router-dom";
import Greeting  from '...'
import { Counter } from "../../Pages/useEffect/Counter";



const CustomRouter=  () => {
  return (
   <Routes>
    <Route path="/Greeting" element={<Greeting />} />"
    <Route path="/Talle" element={<Talle />} />"
    <Route path="/Kontaktformular" element={<Kontaktformular />} />"
    <Route path="/Counter" element={<Counter/>} />
    
     
   </Routes>
  )
}


export default CustomRouter;