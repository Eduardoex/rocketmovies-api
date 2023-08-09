const { Router } = require("express");

const usersRouter = require("./users.routes")
const movienotesRouter = require("./movieNotes.routes")
const movietagsRouter = require("./movieTags.routes")
const sessionsRoutes = require("./sessions.routes")

const routes = Router ()
routes.use("/users", usersRouter )
routes.use("/movienotes", movienotesRouter )
routes.use("/movietags", movietagsRouter)
routes.use("/sessions", sessionsRoutes)

module.exports = routes