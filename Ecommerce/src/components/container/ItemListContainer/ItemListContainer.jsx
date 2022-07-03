import React from 'react'
import { useState, useEffect } from 'react'
import { gFetch } from '../../../helpers/getFetch'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
 
    useEffect(() => {
      gFetch
      .then(resp => setProducts(resp))
      .catch( err => console.log(err))
    }, [])
  return (
    <div>
      {products.map(prod => <div
                                  key={prod.id}
                                  className='col-md-4 p-5'
                              >
                                  <div className="card w-100 mt-5">
                                    <div className="card-header">
                                      {`${prod.name} - ${prod.categoria}`}
                                    </div>
                                    <div className="card-body">
                                      <img src={prod.imagen} alt='' className='W-15' />
                                      {prod.precio}
                                    </div>
                                    <div className="card-footer">
                                      <button className="btn btn-outline-primary btn-block">

                                      </button>

                                    </div>
                                  </div>
                              </div>)
    
      
      
      
      
      
      }
    </div>
  )
}

export default ItemListContainer
