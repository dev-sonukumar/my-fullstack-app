import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./pages/Navbar";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/api/data") // Use the proxy path
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Fullstack React + Express App</h1>
      <p>Data from backend: {data}</p>
      <Navbar />
    </div>
  );
}

export default App;
