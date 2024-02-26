import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/Home/searchBar/SearchBar'
import FilterPanel from '../../components/Home/filterPanel/FilterPanel'
import Lists from '../../components/Home/list/Lists'

import "./style.css";
import { dataList } from '../../constants'
import EmptyView from '../../components/common/emptyView/EmptyView';

const Home = () => {
const [selectedCategory, setSelectedCategory] = useState(null)
const [selectedRating, setSelectedRating] = useState(null)
const [selectedPrice, setSelectedPrice] = useState([1000, 5000])
const [list, setList] = useState(dataList)
const [inputSearch, setInputSearch] = useState('')
const [resultFound, setResultFound] = useState(false)
const [cuisines, setCuisines] = useState([
  {
    id:1,
    checked:false,
    label: 'American',
  },
  {
    id:2,
    checked:false,
    label: 'Chinese',
  },
  {
    id:3,
    checked:false,
    label: 'Italian',
  },
]
)

const handleSelectCategory =(e, value) => !value ? null : setSelectedCategory(value);
const handleSelectRating =(e, value) => !value ? null : setSelectedRating(value);

const handleChangeChecked = (id)=> {
  const cuisinesStateList = cuisines;
  const changeCheckedCuisines = cuisinesStateList.map(item =>item.id === id? {...item,checked: !item.checked}: item);
  setCuisines(changeCheckedCuisines);
};
const handleChangePrice = (e, value)=> setSelectedPrice(value);


//Filters Applied

const applyFilters = ()=> {
  let updatedList = dataList;

  //Rating Filter
  if(selectedRating){
    updatedList = updatedList.filter((item)=> parseInt(item.rating)=== parseInt(selectedRating));
  }

  //Category filter
  if(selectedCategory){
    updatedList = updatedList.filter((item)=> item.category === selectedCategory);
  }

  //Cuisine Filter 
  //received this types array [american, chinese]
  const cuisineChecked = cuisines.filter((item)=> item.checked).map((item)=> item.label.toLowerCase());

  if(cuisineChecked.length){
    updatedList = updatedList.filter((item)=> cuisineChecked.includes(item.cuisine));
  }

  //Price Filter
 const minPrice = selectedPrice[0];
 const maxPrice = selectedPrice[1];

 updatedList = updatedList.filter((item)=> item.price >= minPrice && item.price <=maxPrice);



 //Search Input Filter
   if(inputSearch){
    updatedList = updatedList.filter((item)=>
     item.title.toLowerCase().search(inputSearch.toLocaleLowerCase().toLowerCase().trim()) !== -1);
   }


  setList(updatedList);

  !updatedList.length ? setResultFound(false) : setResultFound(true) ;
};

useEffect(()=> {
applyFilters();
}, [selectedRating, selectedCategory, cuisines, selectedPrice, inputSearch]);



  return (
    <div className="home">
        {/* searchBar */}
        <SearchBar value={inputSearch} changeInput={(e)=> setInputSearch(e.target.value)} />

        <div className="home_panelList-wrap">
         <div className="home_panel-wrap">
        {/* SideFiltered NavBar */}
        <FilterPanel selectCategory={handleSelectCategory} 
        selectedCategory={selectedCategory}
        selectRating={handleSelectRating}
        selectedRating={selectedRating}
        cuisines={cuisines}
        changeChecked={handleChangeChecked}
        selectedPrice={selectedPrice}
        changedPrice={handleChangePrice}
        />
        </div>
        <div className="home_list-wrap">
        {/* list & empty view */}
        {resultFound ? <Lists list={list}/> : <EmptyView/>}
        </div>
        </div>
    </div>
  )
}

export default Home
