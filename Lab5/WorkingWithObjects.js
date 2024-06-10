const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };
  
  // Define the module object
  const module = {
    id: "M123",
    name: "Introduction to React",
    description: "A course module on React basics and advanced concepts",
    course: "Web Development",
  };
  
  export default function WorkingWithObjects(app) {
    // Get the assignment object
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
  
    // Retrieve the assignment's title
    app.get("/lab5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
  
    // Update the assignment's title
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
      const { newTitle } = req.params;
      assignment.title = newTitle;
      res.json(assignment);
    });
  
    // Update the assignment's score using GET
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
      const { newScore } = req.params;
      assignment.score = parseInt(newScore, 10);
      res.json(assignment);
    });
  
    // Update the assignment's completed status using GET
    app.get("/lab5/assignment/completed/:completed", (req, res) => {
      const { completed } = req.params;
      assignment.completed = completed === 'true';
      res.json(assignment);
      
    });

    // Get the module object
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
  
    // Retrieve the module's name
    app.get("/lab5/module/name", (req, res) => {
      res.send(module.name);
    });
  
    // Update the module's name
    app.get("/lab5/module/name/:newName", (req, res) => {
      const { newName } = req.params;
      module.name = newName;
      res.json(module);
    });
  
    // Update the module's description
    app.get("/lab5/module/description/:newDescription", (req, res) => {
      const { newDescription } = req.params;
      module.description = newDescription;
      res.json(module);
    });
  }
  