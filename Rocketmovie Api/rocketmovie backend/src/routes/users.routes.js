const  { Router } = require("express");
const multer = require("multer")
const uploadsConfig = require("../configs/upload")

const UserController = require("../controllers/UserController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")


const usersRoutes = Router()
const upload = multer(uploadsConfig.MULTER)


const  userController = new UserController()
const  userAvatarController = new UserAvatarController()

usersRoutes.post("/",  userController.create)
usersRoutes.put("/",  ensureAuthenticated, userController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update )


module.exports = usersRoutes;