import { useState,useEffect } from "react";
import { useHistory,useLocation } from "react-router-dom";
import { getAllCategories } from "./api";
import Loader from "../Loader";
import CategoryList from "../CategoryList";
import Search from "../Search";

export default function Home(){
  const [catalog,setCatalog] = useState([])
  const [filteredCatalog,setFilterdCatalog] = useState([])
  const {pathname,search} = useLocation()
  const {push} = useHistory()

  const handleSearch = (str) =>{
   setFilterdCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))

   push({
     pathname,
     search : `?search=${str}`
  })
}


  useEffect(() => {
   getAllCategories().then(data => {
     setCatalog(data.categories)
     setFilterdCatalog( search ? 
      data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split("=")[1].toLowerCase()))
      : data.categories
      )
   })
  }, [search]);

  return(
    <>
    <Search cb={handleSearch}/>
    {!catalog.length ? (
      <Loader/>
    ) : <CategoryList catalog={filteredCatalog}/>
    }
    </>
  )
}