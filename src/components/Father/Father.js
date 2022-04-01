import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
  return (
    <div>
      <h4>Father</h4>
      <p>house: {house}</p>
      <section style={{ display: "flex" }}>
        <MySelf house={house}></MySelf>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </section>
    </div>
  );
};

export default Father;
