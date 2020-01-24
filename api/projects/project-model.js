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
  return db("projects")
    .join("tasks")
    .select(
      "projects.project_name",
      "projects.description as project_description",
      "tasks.description",
      "tasks.notes",
      "tasks.complete"
    )
    .where("projects.id", id);
}
