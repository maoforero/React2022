import React from 'react';
import FilterCategory from '../components/FilterCategory/FilterCategory';

const Food = () => {
  return (
    <div>
      <h1>Food</h1>
      <div className='container__itemList'>
        <FilterCategory type="food"/>
      </div>  
    </div>
  )
}

export default Food