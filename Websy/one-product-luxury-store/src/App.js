import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import ProductImage from "./assets/product.jpg"; // Replace with your image

const OneProductStore = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [price, setPrice] = useState(299);
  const [stock, setStock] = useState(10);
  const [countdown, setCountdown] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCustomization = (event) => {
    const value = event.target.value;
    if (value === "engraving") setPrice(329);
    else setPrice(299);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={darkMode ? "dark" : "light"}
      style={{ fontFamily: "Poppins, sans-serif", color: darkMode ? "#FFF" : "#333" }}
    >
      <header style={{ background: darkMode ? "#2C2C2C" : "#EAEAEA", padding: "20px", textAlign: "center", fontSize: "1.5rem", fontWeight: "bold" }}>
        <h1>Luxury Timepiece</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          style={{ background: darkMode ? "#2C2C2C" : "#EAEAEA", color: darkMode ? "#FFF" : "#333", border: "none", padding: "15px", cursor: "pointer", borderRadius: "5px", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          🌙 Toggle Mode
        </motion.button>
      </header>
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero"
      >
        <motion.img 
          src={ProductImage} 
          alt="Luxury Watch" 
          whileHover={{ scale: 1.05 }}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }}
        />
      </motion.div>

      <motion.section 
        className="details"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", padding: "20px" }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>Handcrafted Perfection</h2>
        <p style={{ fontSize: "1.2rem" }}>Made from premium materials, our luxury timepiece is designed for elegance and durability.</p>
        <h3 style={{ color: "gold", fontSize: "1.8rem" }}>Price: ${price}</h3>
        <label style={{ fontSize: "1.2rem", fontWeight: "500" }}>
          Customization:
          <select onChange={handleCustomization} style={{ marginLeft: "10px", padding: "5px", fontSize: "1rem" }}>
            <option value="standard">Standard</option>
            <option value="engraving">With Engraving (+$30)</option>
          </select>
        </label>
        <p className="stock" style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}>Only {stock} left in stock!</p>
        <p className="countdown" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Limited-time offer: {Math.floor(countdown / 60)}:{countdown % 60} left</p>
        <motion.button 
          className="buy-now"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ padding: "15px 30px", fontSize: "1.5rem", background: "gold", border: "none", cursor: "pointer", borderRadius: "5px", fontWeight: "bold" }}
        >
          Buy Now
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default OneProductStore;
