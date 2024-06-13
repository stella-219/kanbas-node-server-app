import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";  
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import "dotenv/config";

//Use the connection string to listen to port at the kanbas database existing in the server.
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING
    || "mongodb+srv://Cluster20645:Lemon219@cluster20645.xfehh2o.mongodb.net/kanbas";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json()); //Do all the work AFTER this line
AssignmentRoutes(app);
ModuleRoutes(app);
UserRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000)
