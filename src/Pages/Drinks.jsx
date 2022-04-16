import React from 'react';
import FilterCategory from '../components/FilterCategory/FilterCategory'

const Drinks = (props) => {
  let type = props.type;

  return (
    <div>
      Drinks
      <FilterCategory type={type}/>
    </div>
  )
}

export default Drinks