import Navbar1 from "./components/Navbar1";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import data from "../src/data.json";

function App() {
  const [query, setQuery] = useState("");
  const [data1, setData1] = useState(data);
  return (
    <div>
      <Navbar1 query={query} setQuery={setQuery} />
      <Cards
        query={query}
        setQuery={setQuery}
        data1={data1}
        setData1={setData1}
      />
    </div>
  );
}

export default App;
