import { RecordModel,  QuestionModel } from './model.js';

// Quiz DAO
// export const findAllQuizzesForCourse = (courseId) => 
//     QuizModel.find({ course: courseId });

// export const findQuizById = (quizID) => 
//     QuizModel.findById(quizID);

// Question DAO
// export const findQuestionsByQuiz = (quizID) => 
//     QuestionModel.find({ quizID: quizID });

export const findQuestionById = (questionId) => 
    QuestionModel.findById(questionId);

// Record DAO
export const findRecordByUserByQuiz = (userId, quizID) => 
    RecordModel.findOne({ user: userId, quiz: quizID }).populate("user", "quiz");

export const createRecord = (record) => 
    RecordModel.create(record);


export const updateRecord = (userId, quizID, updateRecord) => 
    RecordModel.findOneAndUpdate(
        { user: userId, quiz: quizID },
        updateRecord,
        { new: true }
);