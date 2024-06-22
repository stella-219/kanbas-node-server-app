import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    title: String,
    type: String,
    question: String,
    choices: [String],
    answers: mongoose.Schema.Types.Mixed,
    points: Number,
    quizID: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }
});

export default questionSchema;
