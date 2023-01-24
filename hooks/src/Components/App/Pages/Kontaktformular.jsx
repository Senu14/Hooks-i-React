import { useState } from "react";
const Kontaktformular = () =>{
// useState(false) will help, when the browser loads the value is not be shown. 
  const [show, setShow] = useState(false)
//This method using useState and creating object,
  const [values, setValues] = useState({
      fuldenavn: "",
      telefonnummer: "",
      email:"",
      kommentar:"",
      kontaktmethode:""
  })
//here we are using object Destructuring to copy 
// state object to and rewrite the value which input //has changed
  function handleChange (event){
  const values=event.target.value
        setValues({
          // this is used to copy object
        ...values,
        [event.target.name]:values // here we set new value 
})
}
 
  function handleSubmit (event) {
     event.preventDefault();
//when we fill the inpute setShow(true) helps to display the values.
    setShow(true)
}
  function handleClear () {
//We create new object with empty values and with setState, update the state.
    setValues ({
        fuldenavn: "",
        telefonnummer: "",
        email:"",
        kommentar:"",
        kontaktmethode:""
  })
//SetShow(false) help to haide the values
    setShow(false)
}
  return(
    <>
    <form onSubmit={handleSubmit}>
      <h1>Form Elements</h1>
    <label>Fulde navn:</label>
    <input type="text" name="fuldenavn" value={values.fuldenavn} onChange={handleChange}/>
    <label>Telefonnummer:</label>
    <input type="text" name="telefonnummer" value={values.telefonnummer} onChange={handleChange} />
    <label>Email:</label>
    <input type="text" name="email" value={values.email} onChange={handleChange}/>
    <label>Kommentar:</label>
    <input type="text" name="kommentar" value={values.kommentar} onChange={handleChange}/>

    <select name="kontaktmethode" value={values.kontaktmethode} onChange={handleChange}> 
    <option value='Telefonnummer'>Telefonnummer</option>
          
    <option value='Email'>Email</option>
    </select>
    <button type="submit">sende</button>
    <button type="button" onClick={handleClear}>nulstille</button>
    </form>
    
  { show && 
  <div>
    <p>Fuldenavn: {values.fuldenavn}</p>
    <p>Telefonnummer: {values.telefonnummer}</p>
    <p>Email: {values.email}</p>
    <p>Kommentar: {values.kommentar}</p>
    <p>Kontaktmethode: {values.kontaktmethode}</p>
  </div>
  }
</>
)
}

export default Kontaktformular;