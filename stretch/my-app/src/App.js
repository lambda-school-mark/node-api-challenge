import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(
    axios
      .get("http://localhost:5000/api/projects/1")
      .then((res) => {
        console.log(res);
      })
      .catch()
  );
  return <div className="App"></div>;
}

export default App;
