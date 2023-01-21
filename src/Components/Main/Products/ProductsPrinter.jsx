import React from 'react'
import { ProductCardContainer } from '../Recomended/ProductCardContainer'
import './style.css'

export const ProductsPrinter = ({products}) => {
  return (
    <div
    className='productsContainer'
  >
    {products.length > 0 ? (
      products.map((p) => (
        <ProductCardContainer
          key={p._id}
          id={p._id}
          name={p.name}
          img={p.imgUrl}
          desc={p.desc}
          price={p.price}
        />
      ))
    ) : (
      <div>No hay resultados</div>
    )}
  </div>

  )
}
