import React from 'react'
import ProductItem from './ProductItem';


export default function Product() {
  const productss = [
    { title: "Air Jordan", image: "/shoes.png" },
    { title: "Air Max" , image: "/shoes.png"},
    { title: "Pegasus" , image: "/shoes.png"},
    { title: "Run Easy On" , image: "/shoes.png"},
    { title: "Run Easy On" , image: "/shoes.png"},
    { title: "Run Easy On" , image: "/shoes.png"},
    { title: "Run Easy On" , image: "/shoes.png"},
    { title: "Run Easy On" , image: "/shoes.png"},
  ];
  return (
    <div className='flex flex-col mx-10'>
      
      <p className='my-10 text-xl'>Find Your Max</p>
      <div className='flex flex-row gap-7'>
      {
        productss.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))
      }
      </div>
      
    </div>
  )
}
