import React from 'react';
import FilterCategory from '../components/FilterCategory/FilterCategory'
import '..//Styles/components/itemListContainer/itemListContainer.css';

const Drinks = (props) => {
  let type = props.type;

  return (
    <div> 
      <h1>Drinks</h1>
      <div className='container__itemList'>
        <FilterCategory type={type}/>
      </div>
    </div>
  )
}

export default Drinks