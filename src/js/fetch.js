export default {
    query: "moon",
    page: 1,
    perPage: 4,
    baseUrl: `https://api.pexels.com/v1`,

    getFetch() {
      let key = "563492ad6f91700001000001995038b408394f3792a9dfc1bc60dc2e";
      let params = `/search?query=${query}`;
      let url = this.baseUrl + params;
      let options = {
          method: "GET",
          headers: {
              Autorization: key,
            },
      };

      return fetch(url, options)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .then((result) => {
          console.log(result);
        })
    },
  };