const db = require("../../data/dbconfig.js");

module.exports = {
  addProject,
  getProjects,
  addTask,
  getTasks
};

function addProject(project) {
  return db("projects").insert(project);
}

function getProjects() {
  return db("projects").select("*");
}

function addTask(project_id, task) {
  return db("tasks").insert({ ...task, project_id: project_id });
}

function getTasks(id) {
  return db("tasks")
    .select("*")
    .where("project_id", id);
}
