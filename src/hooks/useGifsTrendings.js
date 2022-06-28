import { useState, useEffect } from "react";
import  GetTrendingGifs  from "services/GetTrendingGifs";

export function useGetTrendingGifs() {
  const [trendingGifs, setTrendings] = useState([]);
  const [loadingTrending, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    GetTrendingGifs().then((data) => {
      setTrendings(data);
      setLoading(false);
    });
  }, []);

 
  return { trendingGifs, loadingTrending };
}
