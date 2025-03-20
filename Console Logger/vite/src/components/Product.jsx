import React from 'react'
import ProductItem from './ProductItem';


export default function Product() {
  const productss = [
    { title: "Air Jordan", image: "/shoes.png" },
    { title: "Air Max" , image: "/shoes1.png"},
    { title: "Pegasus" , image: "/shoes2.png"},
    { title: "Run Easy On" , image: "/shoes3.png"},
    { title: "Run Easy On" , image: "/shoes4.png"},
    { title: "Run Easy On" , image: "/shoes5.png"},
    { title: "Run Easy On" , image: "/shoes6.png"},
    { title: "Run Easy On" , image: "/shoes7.png"},
  ];
  return (
    <div className='flex flex-col mx-10'>
      
      <p className='my-10 text-xl'>Find Your Max</p>
      <div className='grid grid-cols-4 gap-7'>
      {
        productss.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))
      }
      </div>
      
    </div>
  )
}
