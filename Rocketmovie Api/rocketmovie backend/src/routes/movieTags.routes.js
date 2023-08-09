const { Router } = require("express")

const movieTagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const movietagsRoutes = Router();


const movietagsController = new movieTagsController();

 
movietagsRoutes.get('/',ensureAuthenticated, movietagsController.index)




module.exports = movietagsRoutes;