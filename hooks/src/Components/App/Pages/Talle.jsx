import { useState } from "react";

const Talle = () =>{
     const [number, setNumber] = useState (0)
     return(
          <>
           <h1>Hej. Du har klikket på knappen {number} gang</h1>
          <button type="button" onClick={() => setNumber(number => number + 1)}>Click Me</button>

       
          </>
     )

}

export default Talle;