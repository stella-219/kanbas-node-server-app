import * as quizDao from "./quizDao.js";

export default function QuizRoutes(app) {

    // fetch all quizzes for a course
    app.get("/api/courses/:cid/quizzes", async (req, res) => {
        try {
            const { cid } = req.params;
            const quizzes = await quizDao.findAllQuizzesForCourse(cid);
            res.json(quizzes);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // fetch details of a quiz
    app.get("/api/courses/:cid/quizzes/:qid", async (req, res) => {
        try {
            const { qid } = req.params;
            const quiz = await quizDao.findQuizById(qid);
            if (quiz) {
                res.json(quiz);
            } else {
                res.status(404).json({ error: "Quiz not found" });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // Creating a quiz for a Course
    app.post("/api/courses/:cid/quizzes", async (req, res) => {
        try {
            const newQuiz = await quizDao.createQuiz(req.body);
            res.status(201).json(newQuiz);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // Update an quiz
    app.put("/api/quizzes/:qid", async (req, res) => {
        const { qid } = req.params;
        try {
            const updatedQuiz = await quizDao.updateQuiz(qid, req.body);
            if (updatedQuiz) {
                res.json(updatedQuiz);
            } else {
                res.status(404).json({ error: "Quiz not found" });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // Deleting a quiz
    app.delete("/api/quizzes/:qid", async (req, res) => {
        const { qid } = req.params;
        const result = await quizDao.deleteQuiz(qid);
        try {
            if (result.deletedCount > 0) {
                res.sendStatus(200);
            } else {
                res.status(404).json({ error: "Quiz not found" });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    });
}