import { useState } from "react"
import TopOfNav from "./TopOfNav"
import NavBar from "./NavBar"
import BottomOfNav from "./BottomOfNav"
import FilterDiv from "./FilterDiv"
import Footer from './Footer'
import ProductListing from "./ProductsListing"

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  return(
    <div className="main-div">
        <TopOfNav setSearchQuery = {setSearchQuery}/>
        <NavBar/>
        <BottomOfNav/>
        <FilterDiv setSortOption = {setSortOption}/>
        <ProductListing searchQuery={searchQuery} sortOption={sortOption}/>
        <Footer/>
    </div>
  )
}

export default App
