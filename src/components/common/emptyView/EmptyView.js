import React from 'react'
import "./emptyStyles.css";


const EmptyView = () => {
  return (
    <>
    <div>
    <h2 className="emptyTitle">Beta Tumse Na Ho Payega..</h2>
    </div>
    <div className='emptyView-wrap'>
     <img src='/images/gif/empty.gif' alt='empty View'/>
     
    </div>
    
    </>
  )
}

export default EmptyView
