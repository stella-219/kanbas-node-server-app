import QuizModel from './quizModel.js';

export const findAllQuizzesForCourse = (courseId) => {
    return QuizModel.find({ course: courseId });
}

// Fetch details of a quiz
export const findQuizById = (qid) => {
    return QuizModel.findById(qid);
}

// Create a quiz
export const createQuiz = (quiz) => {
    delete quiz._id;
    return QuizModel.create(quiz);
}

// Update a quiz
export const updateQuiz = (qid, newQuiz) => {
    return QuizModel.replaceOne({ _id: qid }, newQuiz);
}

// Delete a quiz
export const deleteQuiz = (qid) => {
    return QuizModel.deleteOne({ _id: qid });
}
    
