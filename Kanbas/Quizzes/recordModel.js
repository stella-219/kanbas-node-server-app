import mongoose from 'mongoose';
import recordSchema from './recordSchema.js';

const RecordModel = mongoose.model('Record', recordSchema);

export default RecordModel;
