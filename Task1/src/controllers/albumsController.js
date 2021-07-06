const axios = require("axios");

function fetchAlbumsFromArtist(req, res) {
  const artistParam = req.params.artistName.replace("_", "+").toLowerCase();
  const artist = artistParam.replace("+", " ").toLowerCase();

  const options = {
    url: `https://itunes.apple.com/search?term=${artistParam}&media=music&limit=200&entity=album`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  axios(options)
    .then((response) => {
      // Filter collabs, tributes, etc.
      const cleanData = response.data.results.filter((elem) => {
        return elem.artistName.toLowerCase() === artist;
      });

      // Select wanted properties.
      const propertData = cleanData.map(({collectionName, artworkUrl100}) => ({collectionName, artworkUrl100}));

      // Filter unique albums with their thumbnails.
      const key = "collectionName";
      const datas = [...new Map(propertData.map((item) => [item[key], item])).values()];

      res.status(200).send({
        artist: artist,
        albums: propertData,
      });
    })
    .catch((err) => {
      console.log(err.message);

      res.status(500).send({
        message: "Something went wrong with your query",
      });
    });
}

module.exports = {
  fetchAlbumsFromArtist,
};
