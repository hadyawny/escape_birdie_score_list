import express from "express";
import { addScore, getScore } from "./score.controller.js";
import { addScoreVal } from "./score.validation.js";
import { validation } from "../../middleware/validation.js";

const scoreRouter = express.Router();

scoreRouter.route("/")
.post(validation(addScoreVal),addScore)
.get(getScore)




export default scoreRouter;
