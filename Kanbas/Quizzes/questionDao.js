import QuestionModel from './questionModel.js';

// Fetch all questions for a quiz
export const findQuestionsForQuiz = (quizId) => {
    return QuestionModel.find({ quizId: quizId });
};

// Fetch a question by its ID
export const findQuestionById = (questionId) => {
    return QuestionModel.findById(questionId);
};
