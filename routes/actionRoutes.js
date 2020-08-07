const express = require("express");

const router = express.Router();

const Actions = require("../data/helpers/actionModel");
const Projects = require("../data/helpers/projectModel");

//create
router.post("/", (req, res) => {
  Actions.insert(req.body)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((error) =>
      res
        .send(500)
        .json({ errorMessage: "unable to create action", error: error.message })
    );
});

//read
router.get("/", (req, res) => {
  Actions.get()
    .then((action) => {
      res.status(200).json(action);
    })
    .catch();
});

//update
router.put("/:id", (req, res) => {
  Actions.update(req.params.id, req.body)
    .then(res.status(200).json({ message: `updated action ${req.params.id}` }))
    .catch((error) => {
      res.status(500).json({
        message: `unable to update action ${req.params.id}`,
        error: error.message,
      });
    });
});

//delete
router.delete("/:id", (req, res) => {
  Actions.remove(req.params.id)
    .then((records) => {
      status(200).json({ message: `deleted action: ${records}` });
    })
    .catch((error) => {
      res.status(500).json({
        message: `unable to delete action ${req.params.id}`,
        error: error.message,
      });
    });
});

module.exports = router;
