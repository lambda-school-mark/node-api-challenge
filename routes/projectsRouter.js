const express = require("express");

const router = express.Router();

const Projects = require("../data/helpers/projectModel");

router.get("/", (req, res) => {
  Projects.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch();
});

router.get("/:id", (req, res) => {
  Projects.get(req.params.id)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "cannot fetch project", error: error.message });
    });
});

module.exports = router;
