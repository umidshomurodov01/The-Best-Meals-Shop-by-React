import {API_URL} from './config'


const getMealById = async (mealID)=>{

  const respons = await fetch(API_URL + 'lookup.php?i=' + mealID)
  return await respons.json()
}

const getAllCategories = async () => {
const respons = await fetch(API_URL + 'categories.php')
return await respons.json()
}

const getFilterCategory = async (categoryName)=>{

  const respons = await fetch(API_URL + 'filter.php?c=' + categoryName)
  return await respons.json()
}

export {getMealById,getAllCategories,getFilterCategory}