import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

/**
 * Context API
 * 1. Call createContext with a default value
 * 2. Set a variable of the context with uppercase
 * 3. Make sure you export the context to use it in other places
 * 4. Wrap your child content using ContextName.provider
 * 5. Provide a value
 * 6. to consume the context from child component
 * 7. useContext hook and you will need to pass the contextName
 * 8. Make sure you take notes...
 */

export const RingContext = createContext("diamond");

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "Platinum Ring";

  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h3>Grandpa</h3>
        <p>
          House: {house} <button onClick={handleBuyAHouse}>Buy a House</button>
        </p>
        <section style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
