import React from 'react'
import { useState, useEffect, } from 'react'
import { useParams } from "react-router-dom";
import { gFetch2} from '../../../helpers/getFetch2';
import ItemDetail from './ItemDetail';



    const ItemDetailContainer = ({ greeting }) => {
        const [producto2, setProduct2] = useState([])
        const { categoryId } = useParams();
        const { id } = useParams();
        useEffect(() => {
          gFetch2
          .then(resp => setProduct2(resp.find((p) => p.id === id)))
          .catch( err => console.log(err));
        },[id]);
        console.log(categoryId);
  return (
    <div>
    <ItemDetail producto2={producto2} />
    </div>
    
  );
};

export default ItemDetailContainer