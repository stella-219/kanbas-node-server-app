import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  attempt: { type: Number, required: true },
  startedAt: { type: Date, required: true },
  submittedAt: { type: Date, required: true },
  timeTaken: { type: String, required: true },
  score: { type: Number, required: true },
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
      answer: { type: mongoose.Schema.Types.Mixed, required: true }
    }
  ]
});

export default answerSchema;
