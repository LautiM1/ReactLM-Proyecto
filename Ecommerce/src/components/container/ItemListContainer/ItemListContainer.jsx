import React from 'react'
import { useState, useEffect, } from 'react'
import { gFetch } from '../../../helpers/getFetch'
import ItemList from './itemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams();
 
    useEffect(() => {
      gFetch
      .then(resp => setProducts(resp))
      .catch( err => console.log(err))
    }, [])
    console.log(categoryId)
  return (
    <div>
      <ItemList productos={products} />
    </div>

  
  )
}

export default ItemListContainer
