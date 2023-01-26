import { useEffect, useState  } from "react";
import axios from 'axios'
import { Link, useParams}
const GoalList = () => {
     const[ apiData, setApiData] = useState(())

     useEffect(()=>{
          const url =`https://api.mediehuset.net/sdg/gaols/${id}` 

          const getData = async () => {
          const result = await axios.get(url)
          setApiData(result.data.items);
      }
      getData()
}, [id]);

  return (
    <div>
     <h1>De 17 verdensmål</h1>
     <ul>
          {apiData && apiData.map(value =>{
               return(
                    <li key={value.id}><link to={`/goals/${value.id}`}>{value.title}</link></li>

               )
          })}
          
     </ul>

    </div>
  );
}
  
export { GoalList };