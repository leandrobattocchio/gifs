import { ListaGifs } from "components/listagifs/ListaGifs";
import { useGifs } from "hooks/useGifs";
import React from "react";
import { useParams } from "react-router";
import { ButtonGifs } from "components/nextgifsbutton/ButtonGifs";
import "./Search.css";

export const Search = () => {
  const { keyword } = useParams();
  const { gifs, loading, setPages } = useGifs(keyword);
  let listaMin;

  if (Object.entries(gifs).length < 26) {
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
          <ButtonGifs setPages={setPages} />
        )}
      </div>
    );
  }
};
