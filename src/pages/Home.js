import { useState, useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { getAllCategories } from "../Api";
import Loader from "../components/Loader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const {pathname, search} = useLocation();
  const push = useNavigate();
  const handleSearch = (str) => {
    setFilteredCatalog(catalog.filter(item => {
      return item.strCategory.toLowerCase().includes(str.toLowerCase())
    }))
    push({
      pathname,
      search: `?search=${str}`,
    })
  }
  useEffect(()=>{
    getAllCategories().then(data => {
      setCatalog(data.categories)
      setFilteredCatalog(search ?
        (data.categories.filter(item => item.strCategory.toLowerCase()
          .includes(search.split("=")[1].toLowerCase()))) : data.categories)
    })
  }, [search])
	return (
		<div className="container home">
      <Search cb={handleSearch}/>
      {!catalog.length? <Loader /> : 
      <CategoryList catalog={filteredCatalog} />
      }
		</div>
	);
}
