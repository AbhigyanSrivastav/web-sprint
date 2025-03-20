import React from 'react'
import './ProductsLand.css'
const ProductsLand = () => {
  return (
    <div>
      <div className="product-land">
        <div className="imageLeft">
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-fvGkV1G3aGuA6TwoY6UTVDuaFPBACVudjnfcR6ras9jTo2GZjtEKUsy2SmtrAy63vEukBkEWPA97so8pdR4d0SYgObwjBus12Ca4qrWN4a22kfQnELDO" alt="book" />

        </div>
        <div className="image-detail">
            <h2>Hadappa - Vineet Bajpaye</h2>
            <p>Price: 2000rs</p>
            <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductsLand
