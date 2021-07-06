const albumsController = require("../controllers/albumsController");
const albumsRouter = require("express").Router();

albumsRouter.get("/:artistName", albumsController.fetchAlbumsFromArtist);

module.exports = albumsRouter;
