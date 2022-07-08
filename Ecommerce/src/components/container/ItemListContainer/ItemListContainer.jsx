import React from 'react'
import { useState, useEffect } from 'react'
import { gFetch } from '../../../helpers/getFetch'
import ItemList from './itemList'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
 
    useEffect(() => {
      gFetch
      .then(resp => setProducts(resp))
      .catch( err => console.log(err))
    }, [])
  return (
    <div>
      <ItemList productos={products} />
    </div>

  
  )
}

export default ItemListContainer
