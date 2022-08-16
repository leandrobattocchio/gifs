import { ApiGifs } from "constants/ApiGifs";
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import "./gif.css";

export const VerGif = () => {
  const { gif , title} = useParams();
  const url = ApiGifs.GIF(gif);

  return (
    <div className="ver-gif">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h2>{title}</h2>
      <img src={url} alt="gif" />
    </div>
  );
};
