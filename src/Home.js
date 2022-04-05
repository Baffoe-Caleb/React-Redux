import CategoryList from "./CategoryList";

import React from 'react'
import SearchBar from "./SearchBar";

const Home = () => {


  return (
    <div>
      <SearchBar placeholder="Enter a Book Name..." />

      <CategoryList />

    </div>
  )
}

export default Home