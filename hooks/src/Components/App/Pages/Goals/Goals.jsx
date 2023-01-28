import { useEffect, useState  } from "react";
import axios from 'axios' // Axios is as a fremwork and it coms allways with propority Data
import { Link, useParams } from "react-router-dom";

const Goals = ()=>{
     return(
          <>
          <h1>Den 17 Verdens måle</h1>
          <section>
               <GoalList />
          </section>
          </>
     );
}

// This goalList is our first componant and it sets our list from array
const GoalList = ()  =>{
     // Tis is our Hook with state and function and its datatype "Array"[]
     const[ apiData, setApiData] = useState([])

     // We use useEffect to control the runders
     useEffect(()=>{
     // Endpoint url
          const url =`https://api.mediehuset.net/sdg/goals`

     // Use Async function to fatch our data
          const getData = async () => {
               try {
                    const result = await axios.get(url)
                    setApiData(result.data.items)
               }
               catch(err) {
                    console.error(err);
               }
               
     }
     // Call the function
     getData()
}, [setApiData])
          
     return (
               <ul>
                    {
                         apiData && apiData.map(item =>{
                              return(
                                   <li key={item.id}>
                                        <Link to={`/goals/${item.id}`}>{item.title}</Link></li>
                              )
                         })
                    }    
               </ul>
          )
}

// This goalDetails is our next componant and it taks our listDetails 
const GoalDetails = () => {
     const { id } = useParams()
     const [ apiData, setApiData ] = useState({})

     useEffect(() =>{
          const url = `https://api.mediehuset.net/sdg/goals/${id}`

          const getData = async () => {
                  const result = await axios.get(url)
                  setApiData(result.data.item)
          }
          // Call the fuction
          getData()
     }, [id]);
     
     console.log(apiData);

     return(
          <div>
               { 
// Check if the state is true (&&)
                   apiData && (
                              <>
                                <h2>{apiData.title}</h2>
                                <img src={apiData.image} alt={apiData.title}></img>
                                <p>{apiData.byline}</p>
                              </>
                         )
                    }
               </div>     
          )
     }
  
export { Goals, GoalDetails };