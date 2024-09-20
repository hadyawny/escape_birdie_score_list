import { globalError } from "../middleware/globalError.js";
import scoreRouter from "./user/score.routes.js";

export const bootstrap = (app) => {

  app.use("/score",scoreRouter);



  app.get('/',(req,res)=>res.send("Welcome to Escape Birdie API please select any of available Endpoints"))

  app.use(globalError);
};
