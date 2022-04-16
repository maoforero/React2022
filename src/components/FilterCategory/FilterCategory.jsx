import React, { useEffect, useState } from 'react';
import customFetch from '../../utils/customFetch';
import { useParams } from "react-router-dom"
import productos from '../../utils/[productos';

const FilterCategory = () => {

  const [item, setItem] = useState([]);

  let typeParams = useParams();

  useEffect(() => {
    customFetch(1000, productos)
    .then(res) => setItem(res.filter((e) => e.type === ))
  })

  return (
    <div>FilterCategory</div>
  )
}

export default FilterCategory