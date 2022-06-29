import { Buscador } from "components/buscador/Buscador";
import { ListaGifs } from "components/listagifs/ListaGifs";
import { useGifs } from "hooks/useGifs";
import React from "react";
import "./Inicio.css"
import LazyTrending from "components/listatrending/index";

export const Inicio = () => {
  const { gifs, loading} = useGifs();

  return (
    <div>
      <Buscador />
      <h1 className="titulo">Ultima búsqueda</h1>
      <ListaGifs gifs={gifs} loading={loading} />
      <LazyTrending />
    </div>
  );
};
