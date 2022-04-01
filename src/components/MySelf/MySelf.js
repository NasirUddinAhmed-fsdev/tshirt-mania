import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house }) => {
  return (
    <div>
      <h5>Myself</h5>
      <p>
        <small>house:{house}</small>
      </p>
      <Special></Special>
    </div>
  );
};

export default MySelf;
