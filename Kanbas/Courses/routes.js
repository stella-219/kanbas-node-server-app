import * as dao from "./dao.js";

export default function CourseRoutes(app) {
    
    app.put("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const course = req.body;
        try {
            await dao.updateCourse(id, course);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).send(error);
        }
    });

   
    app.delete("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        try {
            await dao.deleteCourse(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).send(error);
        }
    });

   
    app.post("/api/courses", async (req, res) => {
        const currentUser = req.session.currentUser;
        console.log("Current user:", currentUser); 
        if (!currentUser) {
            res.sendStatus(401);
            return;
        }
        try {
            console.log("Request body:", req.body);
            const newCourse = await dao.createCourse({
                ...req.body,
                author: currentUser._id,
            });
            res.json(newCourse);
        } catch (error) {
            console.error("Error creating course:", error);
            res.status(500).send({ error: error.message });
        }
    });

    app.get("/api/courses", async (req, res) => {
        try {
            const courses = await dao.findAllCourses();
            res.json(courses);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // app.get("/api/courses/published", async (req, res) => {
    //     const currentUser = req.session.currentUser;
    //     if (!currentUser) {
    //         res.send([]);
    //         return;
    //     }
    //     try {
    //         const courses = await dao.findCoursesByAuthor(currentUser._id);
    //         console.log("courses",courses)
    //         res.send(courses);
    //     } catch (error) {
    //         res.status(500).send(error);
    //     }
    // });

    app.get("/api/courses/published", async (req, res) => {
        const currentUser = req.session.currentUser;
        if (!currentUser) {
            res.send([]);
            return;
        }
        try {
            console.log("Fetching courses for user:", currentUser._id); // Added
            const courses = await dao.findCoursesByAuthor(currentUser._id);
            console.log("Fetched courses:", courses); // Added
            res.send(courses);
        } catch (error) {
            console.error("Error fetching published courses:", error); // Added
            res.status(500).send({ message: "Internal Server Error", error: error.message }); // Modified
        }
    });
    

}