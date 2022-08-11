import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Gif ({ title, url, id } = {}) {
  const gif = id;

  if (!title || title === " ") {
    title = "Dont have title";
  }

  return (
    <Link className="gallery-item" to={`/gif/${gif}/${title}`}>
      <LazyLoadImage
        alt={"gif"}
        src={url} // use normal <img> attributes as props
        width={"100%"}
      />
      <div className="gif-title">{title}</div>
    </Link>
  );
};

export default React.memo(Gif)