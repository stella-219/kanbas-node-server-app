
import * as recordDao from "./recordDao.js";

export default function RecordRoutes(app) {
  // Get quiz answers for the user and the quiz
  app.get('/api/records/:userId/:quizId', async (req, res) => {
    const { userId, quizId } = req.params;
    try {
      const records = await recordDao.findRecordByUserByQuiz(userId, quizId);
      res.json(records);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Create a new quiz record for the quiz and user
  app.post('/api/courses/:cid/quizzes', async (req, res) => {
    const { qid, uid} = req.params;
    const recordData = { ...req.body,quiz: qid,user: uid };
    try {
      const newRecord = await recordDao.createRecord(recordData);
      res.status(201).json(newRecord);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Update quiz history (answer) by user ID and quiz ID
  app.put('/api/records/:userId/:quizId', async (req, res) => {
    const { userId, quizId } = req.params;
    try {
      const updatedRecord = await recordDao.updateRecord(userId, quizId, req.body);
      res.json(updatedRecord);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}



