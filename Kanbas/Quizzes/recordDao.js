import RecordModel from './recordModel.js';

export const findRecordByUserIdByQID = (userId,quizId) => RecordModel.findOne({ user: userId, quiz: quizId}).populate("user","quiz");

export const createRecord = (record) => RecordModel.create(record);

export const updateRecord = (userId, quizId, updateRecord) => 
    RecordModel.findOneAndUpdate(
        { user: userId, quiz: quizId },
        updateRecord,
        { new: true }
    );

   