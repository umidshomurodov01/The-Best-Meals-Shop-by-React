import { useEffect,useState } from "react";
import { useParams,useHistory } from "react-router-dom"
import { getMealById } from "./api"
import Loader from "../Loader";
export default function Recipe(){
  const [recipe, setRecipe] = useState([])
  const [showRecipe, setShowRecipe] = useState(false)
  const {id} = useParams()
  const {goBack} = useHistory()

  const handleShowRecipe = ()=>{
    setShowRecipe(!showRecipe)
  }
  
  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]))
   console.log(id)
  }, []);

  return(
    <>    <button className="btn" onClick={goBack}>Go Back</button>
    {!recipe.idMeal ? <Loader/> : (
      <div className="recipe">
      <img className="recipe-img" src={recipe.strMealThumb} alt={recipe.strMeal} /> 
      <h2 className="recipe-title">{recipe.strMeal}</h2>
      <div className="recipe-info">
      <h6><b>Category:</b> {recipe.strCategory} </h6>
      {recipe.strArea ? <h6><b>Country:</b> {recipe.strArea}</h6> : null}
      </div>
      <div className="recipe-ins">
      <p >{recipe.strInstructions}</p>
      </div>
      <button className={!showRecipe ? "btn " : "btn #d50000 red accent-4"} onClick={handleShowRecipe}>{!showRecipe ? "Show Recipe" : "Close Recipe" }</button>
      {showRecipe ? (
      <table className="centred">
      <thead>
        <th>Ingredient</th>
        <th>Measure</th>
      </thead>
      <tbody>
        {Object.keys(recipe).map(key => {
          if(key.includes('Ingredient') && recipe[key]){
            return(
              <tr>
                <td>{recipe[key]}</td>
                <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
              </tr>
            )
          }
        })}
      </tbody>
    </table>
      ) : null}
     
      {recipe.strYoutube ? (
        <div className="row">
          <h5>Video Recipe</h5>
          <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={id} allowFullScreen frameborder="0"></iframe>
          </div>
      ): null}
      </div>
    )}
 </>

  )
}