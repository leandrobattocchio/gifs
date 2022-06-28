import React from "react";
import { Gif } from "components/gif/Gif";
import "./ListaGifs.css";

export const ListaGifs = ({ loading, gifs }) => {
  if (loading) {
    return (
      <div className="cargando-inicio">
        <h1>Cargando...</h1>
      </div>
    );
  } else {
    if (Object.entries(gifs).length === 0) {
      return <h1 className="vacio">No se ha encontrado gifs de esta bùsqueda</h1>;
    } else {
      return (
        <div className="gallery-container">
          {gifs.map((singleGif) => (
            <Gif
              title={singleGif.title}
              url={singleGif.url}
              id={singleGif.id}
              key={singleGif.id}
            />
          ))}
        </div>
      );
    }
  }
};
