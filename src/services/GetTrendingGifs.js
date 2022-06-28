import { ApiGifs } from "constants/ApiGifs";

export default async function GetTrendingGifs() {
  const url = ApiGifs.REQUEST_TRENDING();

  return await fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((gif) => {
          const { title } = gif;

          return { title };
        });
        return gifs;
      }
    });
}
