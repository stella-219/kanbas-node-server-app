import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("quizQuestionModel", schema);
export default model;