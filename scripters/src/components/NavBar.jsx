import React from 'react'
import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <div className="main-container-nav">
                <div className="nav-container">
                    <div className="nav-logo">
                        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRoUYyafSJljnxZq-PEDaPWiRYFYE0h3McTy9M0nHt6MN1PTfnOh_VS9mZJyb_KF1GJ8bYHPC-hIbOKNvGXS7kouulHtDAH_DlShagwhewFjypYezKm0nbj7nW7" alt="sc" />
                    </div>


                    <div className="nav-search">
                        <input type="text" placeholder="Search" />
                        <button type="submit">Search</button>
                    </div>

                    <div className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Products</a>
                        <a href="#">Contact</a>
                        <a href="/cart">Cart</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar
