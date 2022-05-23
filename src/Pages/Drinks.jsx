import React from 'react';
import FilterCategory from '../components/FilterCategory/FilterCategory'
import '../Styles/components/itemListContainer/itemListContainer.css';



const Drinks = (props) => {
  let type = props.type;

  return (
    <div className='container__element'> 
      <h1 className='container__element--title'>Bebidas</h1>
      <div className='container__itemList'>
        <FilterCategory type={type}/>
      </div>
    </div>
  )
}

export default Drinks