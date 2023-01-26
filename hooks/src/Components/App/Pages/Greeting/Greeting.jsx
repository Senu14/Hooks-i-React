import { useState } from 'react'


export const Greeting = () => {
     const [ name, setName] = useState ('Senait');
     return(
          <>
          <h1>Hej. mit navn er {name}</h1>
          <input className="greeting" type="text" onInput={event => setName(event.target.value)}/>

         
          </>
          )
         
     }



export default Greeting;