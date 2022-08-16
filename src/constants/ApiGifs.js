export const ApiGifs = {
  URL: "https://api.giphy.com/v1",
  KEY: "JKtqBLRs2unIJD1E9SWuqbPd8rmvTGJP",
  GIF: function (id) {
    return `https://media2.giphy.com/media/${id}/giphy.gif`;
  },
  REQUEST_TRENDING: function () {
    return `${this.URL}/gifs/trending?api_key=${this.KEY}&limit=5&rating=g`;
  },
  REQUEST_URL: function ({keyword, limit = 16, page = 0, rating, languages} = {}) {
    return `${this.URL}/gifs/search?api_key=${this.KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${languages}`;
  },
};
