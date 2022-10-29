import React from "react";
import  Gif  from "components/gif/Gif";
import "./ListaGifs.css";
import Masonry from '@mui/lab/Masonry';
export const ListaGifs = ({ loading, gifs }) => {
  if (loading) {
    return (
      <div className="loader margin"></div>
    );
  } else {
    if (Object.entries(gifs).length === 0) {
      return <h1 className="vacio">No se ha encontrado gifs de esta bùsqueda</h1>;
    } else {
      return (
        <div className="container">
            <Masonry columns={3} spacing={2}>
          {gifs.map((singleGif) => (
            <Gif
              title={singleGif.title}
              url={singleGif.url}
              id={singleGif.id}
              key={singleGif.id}
            />
          ))}
        </Masonry>
        </div>
      
      );
    }
  }
};
