import { useState, useEffect } from "react";
import GetGifs from "services/GetGifs";

export function useGifs(keyword = localStorage.getItem("keywordSave")) {
  const INITIAL_PAGE = 0;
  const keywordSave = keyword;

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPages] = useState(INITIAL_PAGE);

  useEffect(
    function () {
      setLoading(true);
      GetGifs({ keyword: keywordSave }).then((data) => {
        setGifs(data);
        setLoading(false);
        localStorage.setItem("keywordSave", keyword);
      });
    },
    [keyword, setGifs, keywordSave]
  );

  useEffect(() => {
    if (page === INITIAL_PAGE) {
      return;
    } else {
      GetGifs({ keyword: keywordSave, page }).then((nextGifs) => {
        setGifs(prevGifs => prevGifs.concat(nextGifs));
      });
    }
  }, [page, keywordSave]);

  return { gifs, loading, setPages };
}
