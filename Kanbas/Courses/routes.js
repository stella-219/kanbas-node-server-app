import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  // Create a new course
  app.post("/api/courses", async (req, res) => {
    try {
      const course = await dao.createCourse(req.body);
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get all courses
  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await dao.findAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Update the course with the id provided in the path parameters with the course provided in the request body.
  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    try {
      await dao.updateCourse(id, course);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Implement a delete route that parses the id of the course as path parameters and removes the corresponding courses from the database's courses array.
  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await dao.deleteCourse(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
