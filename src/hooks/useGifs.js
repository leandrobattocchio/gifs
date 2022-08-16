import { useState, useEffect } from "react";
import GetGifs from "services/GetGifs";

export function useGifs(keyword = localStorage.getItem("keywordSave"), rating = 'g', languages = 'en') {
  const INITIAL_PAGE = 0;
  const keywordSave = keyword;

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPages] = useState(INITIAL_PAGE);

  useEffect(
    function () {
      setLoading(true);
      GetGifs({ keyword: keywordSave, rating , languages }).then((data) => {
        setGifs(data);
        setLoading(false);
        localStorage.setItem("keywordSave", keyword);
      });
    },
    [keyword, setGifs, keywordSave, rating, languages]
  );

  useEffect(() => {
    if (page === INITIAL_PAGE) {
      return;
    } else {
      GetGifs({ keyword: keywordSave, page, rating, languages }).then((nextGifs) => {
        setGifs(prevGifs => prevGifs.concat(nextGifs));
      });
    }
  }, [page, keywordSave, rating , languages]);

  return { gifs, loading, setPages };
}
