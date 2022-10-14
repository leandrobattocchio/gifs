import { Link } from "react-router-dom";
import { useGetTrendingGifs } from "hooks/useGifsTrendings";
import RepeatableTableRows from "components/placeholders/Holder";

export default function ListaTrending() {
  const { trendingGifs, loadingTrending } = useGetTrendingGifs();

  if (loadingTrending) {
    return (
      <div>
        <RepeatableTableRows />
      </div>
    );
  } else {
    const lista = trendingGifs.map((title) => {
      return (
        <div key={title.title} className="trending-gifs">
          <Link to={`/search/${title.title}/g/en`}>
            <b>{title.title}</b>
          </Link>
          <br />
        </div>
      );
    });

    return (
      <div className="trendings">
        <h2>Trending topics</h2>
        {lista}
      </div>
    );
  }
}
