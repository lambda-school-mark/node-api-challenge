const express = require("express");

const router = express.Router();

const Actions = require("../data/helpers/actionModel");

//create
router.post("/", (req, res) => {
  Actions.insert(req.body)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) =>
      res
        .send(500)
        .json({ errorMessage: "unable to create action", error: err })
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

module.exports = router;
