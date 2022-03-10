import { useEffect,useState  } from "react"
import { useParams,useHistory } from "react-router-dom"
import Loader from "../Loader"
import { getFilterCategory } from "./api"
import MealList from "../MealList"

export default function Category(){
  const {name} = useParams()
  const [meals,setMeals] = useState([])
  const {goBack} = useHistory()
  
useEffect(()=>{
getFilterCategory(name).then(data => setMeals(data.meals) )
},[name])

  return(
    <>
    <button className="btn" onClick={goBack}>Go back</button>
    {!meals.length ? <Loader/> : <MealList meals={meals}/>}
   
    </>
  )
}