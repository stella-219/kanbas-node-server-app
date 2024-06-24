
import * as questionDao from './dao.js';
import * as quizDao from './dao.js';
import * as recordDao from './dao.js';

export default function Routes(app) {
    //quiz routes
    // app.get('/api/courses/:cid/quizzes', async (req, res) => {
    //     const { cid } = req.params;
    //     try {
    //       const quizzes = await quizDao.findAllQuizzesForCourse(cid);
    //       res.json(quizzes);
    //     } catch (error) {
    //       res.status(500).send(error);
    //     }
    //   });
      
    // app.get('/api/courses/:cid/quizzes/:quizID', async (req, res) => {
    //     const { quizID } = req.params;
    //     try {
    //       const quiz = await quizDao.findQuizById(quizID);
    //       if (quiz) {
    //         res.json(quiz);
    //       } else {
    //         res.status(404).json({ error: 'Quiz not found' });
    //       }
    //     } catch (error) {
    //       res.status(500).send(error);
    //     }
    //   });

    //question routes
    // app.get('/api/quizzes/:quizID/questions', async (req, res) => {
    //     const { quizID } = req.params;
    //     try {
    //      const questions = await questionDao.findQuestionsByQuiz(quizID);
    //       res.json(questions);
    //     } catch (error) {
    //       console.error('Error fetching questions:', error);
    //       res.status(500).json({ error: error.message });
    //     }
    //   });
    
      {/*
    app.get('/api/questions/:questionId', async (req, res) => {
        const { questionId } = req.params;
        try {
          const question = await questionDao.findQuestionById(questionId);
          if (!question) {
            return res.status(404).json({ error: 'Question not found' });
          }
          res.json(question);
        } catch (error) {
          console.error('Error fetching question:', error);
          res.status(500).json({ error: error.message });
        }
    });
    */}

    //record routes
    app.get('/api/records/:userId/:quizID', async (req, res) => {
        const { userId, quizID } = req.params;
        console.log ("userId: ", userId, "quizID: ", quizID);  //DEBUG LOG
        try {
          const records = await recordDao.findRecordByUserByQuiz(userId, quizID);
          console.log('records:', records);  //DEBUG LOG
          res.json(records);
        } catch (error) {
          console.error("Error fetching record:", error);  //DEBUG LOG
          res.status(500).json({ error: error.message });
        }
      });
    
      // Save record
    app.post('/api/records/saveRecords', async (req, res) => {
        const recordData = req.body;
        try {
          const newRecord = await recordDao.createRecord(recordData);
          res.status(201).json(newRecord);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });


    app.put('/api/records/:userId/:quizID', async (req, res) => {
        const { userId, quizID } = req.params;
        console.log(`Updating record for user: ${userId}, quiz: ${quizID}`);       //DEBUG LOG
        try {
          const updatedRecord = await recordDao.updateRecord(userId, quizID, req.body);
          res.json(updatedRecord);
        } catch (error) {
            console.error("Error updating record:", error); //DEBUG LOG
          res.status(500).json({ error: error.message });
        }
      });
};
