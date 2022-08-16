import { ApiGifs } from "constants/ApiGifs";

export default async function GetGifs({ keyword, page = 0, rating, languages }) {
  const url = ApiGifs.REQUEST_URL({keyword, page, rating, languages});

    return await fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((gif) => {
          const { id, images, title } = gif;
          const url = images.downsized_medium.url;
          return { url, id, title };
        });
        return gifs;
      }
    });
}
