import React from 'react';
import FilterCategory from '../components/FilterCategory/FilterCategory';
import '../Styles/components/itemListContainer/itemListContainer.css';

const Food = () => {
  return (
    <div className='container__element'>
      <h1 className='container__element--title'>Antojos</h1>
      <div className='container__itemList'>
        <FilterCategory type="food"/>
      </div>  
    </div>
  )
}

export default Food