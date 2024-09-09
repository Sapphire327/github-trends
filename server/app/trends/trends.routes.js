import express from 'express'
import {getAll, getById, updateTop} from "./trends.controller.js";

const routes = express.Router();
routes.get("/updateList",updateTop)
routes.get("/getAll",getAll)
routes.get("/getBySlug",getById)

export default routes