import mongoose from 'mongoose';



// Quiz Schema
const quizSchema = new mongoose.Schema({
    number: String,
    title: String,
    description: String,
    quiz_type: String,
    points: String,
    assignment_group: String,
    shuffle_answers: { type: String, enum: ["Yes", "No"] }, 
    time_limit: { type: String, enum: ["Yes", "No"] },
    how_long: String,
    multiple_attempts: { type: String, enum: ["Yes", "No"] },
    how_many_attempts: {type: String},
    show_correct_answers: String,
    access_code: { type: String, enum: ["Yes", "No"] }, 
    access_code_number: String,
    one_question_at_a_time: { type: String, enum: ["Yes", "No"] },
    webcam_required: { type: String, enum: ["Yes", "No"] },
    lock_questions_after_answering: { type: String, enum: ["Yes", "No"] },
    due_date: String,
    available_date: String,
    until_date: String,
    questions: [String],
    course: String,
    published: { type: String, enum: ["Published", "Unpublished"] }, 
},
    { collection: "quizzes" }
);

// Question Schema
const questionSchema = new mongoose.Schema({
    quizID: { type: String, required: true },
    title: String,
    type: {
        type: String,
        required: true,
        enum: ['Multiple Choice', 'True/False', 'Fill in the Blanks']
      },
    question: { type: String, required: true },
    choices: { type: mongoose.Schema.Types.Mixed },
    answers: { type: mongoose.Schema.Types.Mixed },
    points: Number
},
{collection: "questions"}
);

// record Schema
const answersSchema = new mongoose.Schema({
    questionId: { type:String, required: true },
    answer: { type: mongoose.Schema.Types.Mixed }, // Mixed type to support different answer formats
    pointsEarned: { type: Number, required: true },
},
{_id: false, collection: "answers"}
);

const recordSchema = new mongoose.Schema({
    user: { type:String, required: true },
    role: {type: String, required: true, enum: ["student", "faculty"]},
    course: { type: String, required: true},
    quiz: { type: String, required: true },
    attempt: { type: Number, required: true },
    startedAt: { type: Date, required: true },
    submittedAt: { type: Date, required: true },
    timeTaken: { type: String, required: true }, // Storing time as a string (e.g., "19 minutes 30 seconds")
    score: { type: Number, required: true },
    pointsForQuiz: { type: Number, required: true },
    keptScore: { type: Number, required: true },
    answers: { type: [answersSchema] },
  },
{ collection: "records", versionKey: false}
);

export { recordSchema, quizSchema, questionSchema };