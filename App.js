import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import QuizRoutes from "./Kanbas/Quizzes/quizRoutes.js";
import QuestionRoutes from "./Kanbas/Quizzes/questionRoutes.js";
import RecordRoutes from "./Kanbas/Quizzes/recordRoutes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";  
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import "dotenv/config";
import session from "express-session";
import "dotenv/config";

// Use the connection string to listen to port at the kanbas database existing in the server.
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING
    || "mongodb+srv://Cluster20645:Lemon219@cluster20645.xfehh2o.mongodb.net/kanbas";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:3000",
    })
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
      
app.use(
    session(sessionOptions)
);
    
app.use(express.json()); // Do all the work AFTER this line
AssignmentRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);
RecordRoutes(app);
ModuleRoutes(app);
UserRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
