import * as dao from "./dao.js";
export default function QuizQuestionRoutes(app) {
  app.get("/api/questions", async (req, res) => {
    const questions = await dao.findAllQuestions();
    res.json(questions);
  });

  app.get("/api/quizzes/:qid/questions", async (req, res) => {
    const { qid } = req.params;
    const questions = await dao.findQuestionsByQuiz(qid);
    res.json(questions);
  });

  app.post("/api/quizzes/:qid/questions", async (req, res) => {
    const { qid } = req.params;
    const newQuestionData = { ...req.body, quizID: qid };
    const newQuestion = await dao.addQuestion(newQuestionData);
    res.json(newQuestion);
  });

  app.put("/api/quizzes/:qid/questions/:questionid", async (req, res) => {
    const { qid, questionid } = req.params;
    const updateQuestionData = { ...req.body, quizID: qid };
    const status = await dao.editQuestion(questionid, updateQuestionData);
    res.json(status);
  });

  app.delete("/api/questions/:questionid", async (req, res) => {
    const { questionid } = req.params;
    const status = await dao.deleteQuestion(questionid);
    res.json(status);
  });
}