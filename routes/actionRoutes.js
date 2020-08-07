const express = require("express");

const router = express.Router();

const Actions = require("../data/helpers/actionModel");

//read
router.get("/", (req, res) => {
  Actions.get()
    .then((action) => {
      res.status(200).json(action);
    })
    .catch();
});

module.exports = router;
