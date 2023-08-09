const  { Router } = require("express");

const MovieNotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const movienotesRoutes = Router()


const  movienotesController = new MovieNotesController()

movienotesRoutes.use(ensureAuthenticated)

movienotesRoutes.get("/",  movienotesController.index)
movienotesRoutes.post("/",  movienotesController.create)
movienotesRoutes.get("/:id",  movienotesController.show)
movienotesRoutes.delete("/:id",  movienotesController.delete)


module.exports = movienotesRoutes;