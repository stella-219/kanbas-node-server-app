import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  // Route to handle HTTP PUT method with module ID embedded in the URL
  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    try {
      await dao.updateModule(mid, module);
      res.sendStatus(204);
    } catch (error) {
      console.error("Error updating module:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Route to handle HTTP DELETE method with module ID embedded in the URL
  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    try {
      await dao.deleteModule(mid);
      res.sendStatus(200);
    } catch (error) {
      console.error("Error deleting module:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Route to create a new module for the course ID encoded in the path (cid)
  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = { ...req.body, course: cid };
    try {
      const createModule = await dao.createModule(newModule);
      res.json(createModule);
    } catch (error) {
      console.error("Error creating module:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Route to retrieve the modules for the course ID encoded in the path (cid)
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    try {
      const modules = await dao.findModulesByCourseId(cid);
      res.json(modules);
    } catch (error) {
      console.error("Error fetching modules:", error);
      res.status(500).json({ error: error.message });
    }
  });

}
