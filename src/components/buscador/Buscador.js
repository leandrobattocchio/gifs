import React from "react";
import { useNavigate } from "react-router";


export const Buscador = () => {

  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${e.target[0].value}`);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-100 me-3"
        style={{ padding: "60px" }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
    </div>
  );
};
