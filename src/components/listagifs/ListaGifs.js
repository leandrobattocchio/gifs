import React from "react";
import Gif from "components/gif/Gif";
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
      return (
        <>
          <img className="vacio-img" src="https://64.media.tumblr.com/d94232be2f1d6d55a8602685f42079fe/4d2b5839af43cacb-23/s500x750/5a67b1a8c629407744f8fc1e5747081354814072.gif" alt='John Travolta'/>
          <h1 className="vacio">No se han encontrado gifs de esta bùsqueda</h1>
        </>
      )

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
