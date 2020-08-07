const express = require("express");
const cors = require("cors");
const projectRouter = require("./routes/projectsRouter");
const actionRouter = require("./routes/actionRoutes");
const server = express();
const port = 5000;

server.use(express.json());
server.use(cors());
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

server.use("/", (req, res) => {
  res.status(200).send(`<h2>Having a jolly time with API's</h2>`);
});

server.listen(port, () => {
  console.log("server running on port 5000");
});
