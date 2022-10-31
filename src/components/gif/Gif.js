import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Gif ({ title, url, id } = {}) {
  const gif = id;

  if (!title || title === " ") {
    title = "Dont have title";
  }

  return (
   <div>
    <Link className="gallery-item" to={`/gif/${gif}/${title}`}>
     <LazyLoadImage
        alt={"gif"}
        src={url} // use normal <img> attributes as props
        className='masonry-img'
      />
    </Link>
    </div>  
  );
};

export default React.memo(Gif)