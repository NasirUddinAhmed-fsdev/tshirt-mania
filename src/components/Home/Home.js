import React, { useState } from "react";
import useTShirts from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (clickedItem) => {
    const exists = cart.find((tShirt) => tShirt._id === clickedItem._id);
    if (!exists) {
      const newCart = [...cart, clickedItem];
      setCart(newCart);
    } else {
      alert("Item Already Added");
    }
  };

  const handleRemoveFromCart = (clickedItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== clickedItem._id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
