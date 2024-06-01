const express = require("express");
const {
  getAllProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controller/ProjectController");

const projectRouter = express.Router();
projectRouter.route("/getallprojects").get(getAllProjects);
projectRouter.post("/projects", createProject);
projectRouter.get("/projects/:id", getProjectById);
projectRouter.put("/projects/:id", updateProject);
projectRouter.delete("/projects/:id", deleteProject);
module.exports = projectRouter;
