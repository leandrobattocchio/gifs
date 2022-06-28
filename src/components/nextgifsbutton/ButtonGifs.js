import React from "react";
import "./ButtonGifs.css";

export const ButtonGifs = ({ setPages }) => {
  function handleButton() {
    setPages((prevPage) => prevPage + 1);
  }

  return (
    <div>
      <button onClick={handleButton} className="next-page">
        Next Page
      </button>
    </div>
  );
};
