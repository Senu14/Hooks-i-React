import { Route, Routes } from "react-router-dom";
import Greeting  from '...'



const CustomRouter=  () => {
  return (
   <Routes>
    <Route path="/Greeting" element={<Greeting />} />"
    <Route path="/Talle" element={<Talle />} />"
    <Route path="/Kontaktformular" element={<Kontaktformular />} />"
    
     
   </Routes>
  )
}


export default CustomRouter;