import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./searchBar.css";

const SearchBar = ({value, changeInput}) => {
  return (
    <div className="searchBar-wrap">
        <SearchIcon className="searchBar-icon"/>
    <input type='text' placeholder='Search Here....' value={value} onChange={changeInput}/>
    </div>
  )
}

export default SearchBar
