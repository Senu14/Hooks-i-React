import { useState } from "react"

export default function FormElements(){
     // const [show, setShow] = useState(false)

     const[FormElm, setFormElm] = useState({}, {
          firstname: '...',
          lastname: '...',
          email: '...',
          description: '...'
          // accept: false
     })
     const registerInput = e => {
          const values=e.target.value
          setFormElm({
            // this is used to copy object
          ...values,
          [e.target.name]:values // here we set new value 
         })

//   setShow(true)

     }
     
     return(
          <div>
          <form>
          <h1>Form Element</h1>
          <div>
          <label htmlFor="firstname">Fornavn</label>
          <input type="text" name="firstname" id="Firstname" onChange={registerInput}/>
          </div>

          <div>
          <label htmlFor="lastname">Efternavn</label>
          <input type="text" name="lastname" id="lastname" onChange={registerInput} />
          </div>

          <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" onChange={registerInput}/>
          </div>

          <div>
          <label htmlFor="description">Profiltekst</label>
          <textarea name="description" id="description" onChange={registerInput}></textarea>
          </div>

          </form>
          <section>
               <ul>
                    <li>Fornavn:{ FormElm.firstname } </li>
                    <li>Efternavn:{ FormElm.lastname }</li>
                    <li>Email:{ FormElm.email } </li>
                    <li>Profiltekst:{ FormElm.description}</li>
               </ul>
             
          </section>
          </div>
     )
}









