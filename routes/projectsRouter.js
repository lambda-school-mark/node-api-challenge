const express = require("express");

const router = express.Router();

const Projects = require("../data/helpers/projectModel");

//create
router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) =>
      res
        .send(500)
        .json({ errorMessage: "unable to create project", error: err })
    );
});

//read
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

//update
router.put("/:id", (req, res) => {
  Projects.update(req.params.id, req.body)
    .then(res.status(200).json({ message: `updated project ${req.params.id}` }))
    .catch((error) => {
      res
        .status(500)
        .json({ message: `unable to update project ${req.params.id}` });
    });
});

module.exports = router;
