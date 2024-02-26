
import React from 'react'
import ListItem from './listItem/ListItem';
import "./listStyle.css";


const Lists = ({list}) => {
  return (
    <div className="list-wrap">
      {
        list.map((item)=> (
          <ListItem key={item.id} item={item}/>
        ))
      }
     
    </div>
  )
}

export default Lists
