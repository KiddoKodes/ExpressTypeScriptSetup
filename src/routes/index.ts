//router of the application
import express from "express";
import * as Controllers from "../controllers";
import isAuthenticated from "../middlewares/isAuthenticated";
const router = express.Router();

router.get("/", isAuthenticated, Controllers.HelloWorld);
export default router;
