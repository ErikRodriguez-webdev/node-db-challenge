const express = require("express");
const App = require("./appModel");

const router = express.Router();

router.post("/resources/", (req, res) => {
  App.addResource(req.body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Error with creating resource." });
    });
});

router.get("/resources/", (req, res) => {
  App.findAllResources()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "Error with returning all resources." });
    });
});

router.post("/projects/", (req, res) => {
  App.addProject(req.body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Error with creating project." });
    });
});

router.get("/projects/", (req, res) => {
  App.findAllProjects()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "Error with returning all projects." });
    });
});

router.post("/tasks/", (req, res) => {
  App.addTask(req.body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Error with creating task." });
    });
});

router.get("/tasks/", (req, res) => {
  App.findAllTasks()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Error with returning all tasks." });
    });
});

module.exports = router;
