const express = require("express");

const router = express.Router();

const Projects = require("../data/helpers/projectModel");

//create
router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) =>
      res
        .send(500)
        .json({
          errorMessage: "unable to create project",
          error: error.message,
        })
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
      res.status(500).json({
        message: `unable to update project ${req.params.id}`,
        error: error.message,
      });
    });
});

//delete
router.delete("/:id", (req, res) => {
  Projects.remove(req.params.id)
    .then((records) => {
      status(201).json({ message: `deleted projects: ${records}` });
    })
    .catch((error) => {
      res.status(500).json({
        message: `unable to delete project ${req.params.id}`,
        error: error.message,
      });
    });
});

module.exports = router;
