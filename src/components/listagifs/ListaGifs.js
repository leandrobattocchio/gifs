import React from "react";
import  Gif  from "components/gif/Gif";
import "./ListaGifs.css";
import { Container } from "@mui/system";
import Masonry from "react-masonry-css";


export const ListaGifs = ({ loading, gifs }) => {
  const Columns = {
    default: 3,
    1200: 3,
    1000: 2,
    700: 1
  };

  if (loading) {
    return (
      <div className="loader margin"></div>
    );
  } else {
    if (Object.entries(gifs).length === 0) {
      return <h1 className="vacio">No se ha encontrado gifs de esta bùsqueda</h1>;
    } else {
      return (
        <Container className='space' maxWidth='xl'>
          <Masonry 
            breakpointCols={Columns}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column" 
          >
          {gifs.map((singleGif) => (
            <Gif
              title={singleGif.title}
              url={singleGif.url}
              id={singleGif.id}
              key={singleGif.id}
            />
          ))}
        </Masonry>      
        </Container>
            
      );
    }
  }
};
