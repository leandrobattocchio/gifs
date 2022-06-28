import React, { Suspense } from "react";
import { useNearScreen } from "hooks/useNearScreen";
import "components/listatrending/Trending.css";
import RepeatableTableRows from "components/placeholders/Holder.js";

const ListaTrending = React.lazy(() => import("./ListaTrendingGifs"));

//Lazy load para los trendings
export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({distance: "250px"});

  return (
    <div ref={fromRef}>
      <Suspense fallback={<RepeatableTableRows />}>
        {isNearScreen ? <ListaTrending /> : <RepeatableTableRows />}
      </Suspense>
    </div>
  );
}
