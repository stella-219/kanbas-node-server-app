import db from "../Database/index.js";

export default function AssignmentRoutes(app) {

    //route retrieves the assignments for the course ID encoded in the path (cid).
   app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = db.assignments.filter((a) => a.course === cid);
    res.json(assignments);
    }); 

    app.get("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignments = db.assignments.filter((a) => a._id === aid);
        res.json(assignments);
        }); 

    //route handles HTTP DELETE method with assignments ID embedded in the URL as shown.
    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
      });

    //route create assignments using assignments ID embedded in the URL as shown.
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
          ...req.body,
          course: cid,
          _id: new Date().getTime().toString(),
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
      });
    
    //route handles HTTP PUT method with assignments ID embedded in the URL as shown.
    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignmentIndex = db.assignments.findIndex(
          (a) => a._id === aid);
        db.assignments[assignmentIndex] = {
          ...db.assignments[assignmentIndex],
          ...req.body
        };
        res.sendStatus(204);
      });
}