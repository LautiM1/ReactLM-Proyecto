import React from 'react'
import { useState, useEffect, } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'


import { gFetch } from '../../../helpers/getFetch'
import ItemList from './itemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [ loading, setLoading] = useState(true);
    const {categoryId} = useParams();
 
    useEffect(() => {
      const db = getFirestore()
      if (categoryId) {
          const queryCollection = collection(db, 'productos')
          const queryCollectionFilter = query(queryCollection, where('categoria', '==', categoryId))
          getDocs(queryCollectionFilter)
          .then(resp => setProducts( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) ) )
          .catch( err => console.log(err) )
          .finally(()=> setLoading(false))             
      } else {           
          const queryCollection = collection(db, 'productos')
          getDocs(queryCollection)
          .then(resp => setProducts( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) ) )
          .catch( err => console.log(err) )
          .finally(()=> setLoading(false))         
      }
  }, [ categoryId ])
 
    /*useEffect(() => {
      gFetch
      .then(resp => setProducts(resp))
      .catch( err => console.log(err))
      .finally(()=> setLoading(false));

    }, [])
    console.log(categoryId)*/
  return (
    <div>
      {
        loading? <h2>Cargando...</h2> :  <ItemList productos={products} />
      }
      
    </div>

  
  )
}

export default ItemListContainer
