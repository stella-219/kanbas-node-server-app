import mongoose from "mongoose"
const questionsSchema = new mongoose.Schema({
    quizID: { type: String, required: true },
    title: String,
    type: {
        type: String,
        required: true,
        enum: ['Multiple Choice', 'True/False', 'Fill in the Blanks']
      },
    question: { type: String, required: true },
    choices: { type: mongoose.Schema.Types.Mixed },
    answers: { type: mongoose.Schema.Types.Mixed },
    points: Number
},
{collection: "questions", versionKey: false}
);
export default questionsSchema;