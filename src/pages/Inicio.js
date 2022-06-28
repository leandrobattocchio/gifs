import { Buscador } from "components/buscador/Buscador";
import { ListaGifs } from "components/listagifs/ListaGifs";
import { useGifs } from "hooks/useGifs";
import React from "react";
import "./Inicio.css"
import LazyTrending from "components/listatrending/index";
import { ButtonGifs } from "components/nextgifsbutton/ButtonGifs";

export const Inicio = () => {
  const { gifs, loading, setPages } = useGifs();

  let listaMin;

  if (Object.entries(gifs).length < 26) {
    listaMin = true;
  }
  return (
    <div>
      <Buscador />
      <h1 className="titulo">Ultima búsqueda</h1>
      <ListaGifs gifs={gifs} loading={loading} />
        {listaMin ? (
          <h1 className="title">No hay más gifs para mostrar</h1>
        ) : (
          <ButtonGifs setPages={setPages} />
        )}
      <LazyTrending />
    </div>
  );
};
