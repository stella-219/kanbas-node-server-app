import * as questionDao from "./questionDao.js";
import QuizModel from "./quizModel.js";

export default function QuestionRoutes(app) {
    // Route to retrieve the questions for the quizId encoded in the path 
    app.get("/api/courses/:cid/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    try {
      const questions = await questionDao.findQuestionsForQuiz(quizId);
      res.json(questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
      res.status(500).json({ error: error.message });
    }
  });


    // Route to retrieve a specific question by its ID
    app.get("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;  // qid here represents the question ID
        try {
            const question = await questionDao.findQuestionById(questionId);
            if (!question) {
                return res.status(404).json({ error: "Question not found" });
            }
            res.json(question);
        } catch (error) {
            console.error("Error fetching question:", error);
            res.status(500).json({ error: error.message });
        }
    });
}
