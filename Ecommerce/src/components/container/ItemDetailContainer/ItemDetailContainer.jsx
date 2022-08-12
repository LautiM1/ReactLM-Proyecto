import React from 'react'
import { useState, useEffect, } from 'react'
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";


import { gFetch2} from '../../../helpers/getFetch2';
import ItemDetail from './ItemDetail';



    const ItemDetailContainer = ({ greeting }) => {
        const [producto2, setProduct] = useState([])
        const { categoryId } = useParams();
        const [ loading, setLoading] = useState(true);
        const { id } = useParams();

        useEffect(() => {
          const db = getFirestore() 
          const queryProduct = doc(db, 'productos', id )
          getDoc(queryProduct)
          .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
          .catch( err => console.log(err) )
          .finally(()=> setLoading(false))
      }, [id])
  
        /*useEffect(() => {
          gFetch2
          .then(resp => setProduct2(resp.find((p) => p.id === id)))
          .catch( err => console.log(err))
          .finally(()=> setLoading(false));
        },[id]);
          
        console.log(categoryId);*/
  return (
    <div>
      {
        loading? <h2>Cargando...</h2> :  <ItemDetail producto2={producto2} />
      }
   
    </div>
    
  );
};

export default ItemDetailContainer