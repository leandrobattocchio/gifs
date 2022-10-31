import { Buscador } from "components/buscador/Buscador";
import { ListaGifs } from "components/listagifs/ListaGifs";
import { useGifs } from "hooks/useGifs";
import React from "react";
import "./Inicio.css";
import LazyTrending from "components/listatrending/index";
import { Helmet } from "react-helmet";

export const Inicio = () => {
  const { gifs, loading } = useGifs();

  return (
    <div className="inicio">
      <Helmet>
        <title>Inicio</title>
        <meta
          name="description"
          content="Inicio de la pagina"
        />
      </Helmet>
      <Buscador />
      <h1>Ultima búsqueda</h1>
      <ListaGifs gifs={gifs} loading={loading} />
      <LazyTrending />
    </div>
  );
};
