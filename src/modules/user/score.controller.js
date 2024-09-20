import { scoreModel } from "../../../database/models/score.model.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utils/appError.js";

const addScore = catchError(async (req, res,next) => {


 const { name, score } = req.body;

 // Fetch current top 10 scores
 const currentScores = await scoreModel.find().sort({ score: -1 }).limit(10);

 // Check if the new score qualifies for the top 10
 if (currentScores.length < 10 || score > currentScores[9].score) {
   // Add new score
   const newScore = new scoreModel({ name, score });
   await newScore.save();

   // Remove the lowest score if we exceed 10 scores
   if (currentScores.length >= 10) {
     await scoreModel.deleteOne({ _id: currentScores[9]._id });
   }

   return res.status(200).json({ message: 'Score submitted successfully' });
 } else {
   return next(new AppError('Score does not qualify for top 10', 400));
 }
});

const getScore = catchError(async (req, res, next) => {
 const topScores = await scoreModel.find().sort({ score: -1 }).limit(10);
 res.status(200).json(topScores);
});

export { addScore, getScore };