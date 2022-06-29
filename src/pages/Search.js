import { ListaGifs } from "components/listagifs/ListaGifs";
import { useGifs } from "hooks/useGifs";
import React, {useCallback, useEffect, useRef} from "react";
import { useParams } from "react-router";
import {useNearScreen}  from "hooks/useNearScreen";
import "./Search.css";
import debounce from 'just-throttle';

export const Search = () => {
  const { keyword } = useParams();
  const externalRef = useRef();
  const { gifs, loading, setPages } = useGifs(keyword);
  let listaMin;

  const {isNearScreen} = useNearScreen({externalRef: loading ? null : externalRef, once: false});

  const handleDebounceIt = useCallback(debounce(()=> setPages(prevPages => prevPages + 1), 1000, {leading: true}), [setPages]); 


  useEffect(function(){
    if(isNearScreen) handleDebounceIt() 
  }, [handleDebounceIt, isNearScreen]);

  if (Object.entries(gifs).length < 15) {
    listaMin = true;
  }

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return (
      <div className="gifs">
        <h1 className="titulo">Búsqueda</h1>
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
