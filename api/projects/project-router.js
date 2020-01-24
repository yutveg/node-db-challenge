const express = require("express");

const router = express.Router();
const Projects = require("./project-model.js");

router.get("/api/projects", (req, res) => {
  Projects.getProjects().then(result => {
    if (result) res.status(200).json(result);
    else res.status(500).json({ error: "end me" });
  });
});

router.post("/api/projects", (req, res) => {
  Projects.addProject(req.body)
    .then(result => {
      if (result) res.status(200).json(result);
      else res.status(500).json({ error: "end me" });
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.get("/api/projects/:id/tasks", (req, res) => {
  Projects.getTasks().then(result => {
    if (result) res.status(200).json(result);
    else res.status(500).json({ error: "end me" });
  });
});

router.post("/api/projects/:id/tasks", (req, res) => {
  Projects.addTask(req.params.id, req.body).then(result => {
    if (result) res.status(200).json(result);
    else res.status(500).json({ error: "end me" });
  });
});

module.exports = router;
