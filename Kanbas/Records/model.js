import mongoose from 'mongoose';
import {recordSchema, quizSchema, questionSchema} from './schema.js';


const RecordModel = mongoose.model('RecordModel', recordSchema);
const QuestionModel = mongoose.model('QuestionModel', questionSchema);

export { RecordModel, QuestionModel };