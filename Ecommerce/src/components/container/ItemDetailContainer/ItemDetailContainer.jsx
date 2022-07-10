import React from 'react'
import { useState, useEffect, } from 'react'
import { gFetch2} from '../../../helpers/getFetch2';
import ItemDetail from './ItemDetail';



    const ItemDetailContainer = ({ greeting }) => {
        const [producto2, setProduct2] = useState([])
        useEffect(() => {
          gFetch2
          .then(resp => setProduct2(resp))
          .catch( err => console.log(err))
        },)

  return (
    <div>
    <ItemDetail producto2={producto2} />
    </div>
    
  )
} 

export default ItemDetailContainer