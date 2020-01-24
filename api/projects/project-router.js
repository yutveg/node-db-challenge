const express = require("express");

const router = express.Router();
const Projects = require("./project-model.js");

router.get("/", (req, res) => {
  Projects.getProjects().then(result => {
    if (result) res.status(200).json(result);
    else res.status(500).json({ error: "end me" });
  });
});

router.post("/", (req, res) => {
  Projects.addProject(req.body)
    .then(result => {
      if (result) res.status(200).json(result);
      else res.status(500).json({ error: "end me" });
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.get("/:id/tasks", (req, res) => {
  Projects.getTasks(req.params.id).then(result => {
    if (result) res.status(200).json(result);
    else res.status(500).json({ error: "end me" });
  });
});

router.post("/:id/tasks", (req, res) => {
  Projects.addTask(req.params.id, req.body).then(result => {
    if (result) res.status(200).json(result);
    else res.status(500).json({ error: "end me" });
  });
});

module.exports = router;
