import React from 'react'
import FilterCategories from './filterListToggle/FilterCategories'
import {categoryList, ratingList} from '../../../constants'

import "./filterPanel.css";
import CheckboxProton from './CheckboxProton/Checkbox';
import SliderProton from './sliderProton/SliderProton';


const FilterPanel = ({selectedCategory, selectCategory, selectRating,
   selectedRating, cuisines, changeChecked, changedPrice, selectedPrice}) => {
  return (
    <>
      {/* Category */}
       <div className="input-group">
        <p className="label">Category</p>
          <FilterCategories options={categoryList} value={selectedCategory} selectToggle={selectCategory}/>
       </div>
      {/* Cosines */}
      <div className="input-group">
      <p className="label">Cuisine</p>
      {cuisines.map((cuisine) => (
        <CheckboxProton
          key={cuisine.id}
          cuisine={cuisine}
          changeChecked={changeChecked}
        />
      ))}
      
      </div>
      {/* Price Range */}
      <div className="input-group">
      <p className="label-range">Price range</p>
      <SliderProton  value={selectedPrice} changedPrice={changedPrice}  />
      </div>
      {/* Star Rating */}
      <div className="input-group">
      <p className="label">Star Ratings</p>
          <FilterCategories options={ratingList} value={selectedRating}  selectToggle={selectRating}/>
       </div>
    
      
    </>
  )
}

export default FilterPanel
