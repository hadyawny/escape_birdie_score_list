import Joi from "joi";

const addScoreVal = Joi.object({
  name: Joi.string().min(1).max(10).required(),
  score: Joi.number(),

});



export { addScoreVal };
