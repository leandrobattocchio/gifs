import { ListaGifs } from "components/listagifs/ListaGifs";
import { useGifs } from "hooks/useGifs";
import React, { useCallback, useEffect, useRef } from "react";
import { useNearScreen } from "hooks/useNearScreen";
import "./Search.css";
import debounce from "just-throttle";
import { Buscador } from "components/buscador/Buscador";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Search = () => {
  const { keyword, rating, languages } = useParams();
  const externalRef = useRef();
  const { gifs, loading, setPages } = useGifs(keyword, rating, languages);
  let listaMin;

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDebounceIt = useCallback(
    debounce(() => setPages((prevPages) => prevPages + 1), 1000, {
      leading: true,
    }),
    [setPages]
  );

  useEffect(
    function () {
      if (isNearScreen) handleDebounceIt();
    },
    [handleDebounceIt, isNearScreen]
  );

  if (Object.entries(gifs).length < 16) {
    listaMin = true;
  }

  if (loading) {
    <Helmet>
      <title>Cargando...</title>
      <meta name="description" content="Cargando resultados de busqueda..." />
    </Helmet>;
    return <h1>Cargando...</h1>;
  } else {
    return (
      <div className="gifs">
        <Helmet>
          <title>{`${gifs.length} resultados de búsqueda`}</title>
          <meta name="description" content={`${gifs.length} resultados de busqueda`} />
        </Helmet>
        <Buscador />
        <h1 className="titulo">{`Resultados de gifs sobre ${keyword}`}</h1>
        <ListaGifs gifs={gifs} loading={loading} />
        {listaMin ? (
          <h1 className="title">No hay más gifs para mostrar</h1>
        ) : (
          <div id="chivato" ref={externalRef}></div>
        )}
      </div>
    );
  }
};
