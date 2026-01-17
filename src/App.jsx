import { useState } from "react";
import ArrayBars from "./components/ArrayBars";
import Controls from "./components/Controls";
import PseudoCode from "./components/PseudoCode";
import Explanation from "./components/Explanation";

export default function App() {
  const [array, setArray] = useState([]);

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        DSA Learning Visualizer
      </h1>

      {/* Buttons */}
      <Controls array={array} setArray={setArray} />

      {/* Main Layout */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "30px",
          width: "100%",
        }}
      >
        {/* Box 1: Visualizer */}
        <div
          style={{
            flex: 3,
            backgroundColor: "#0f172a",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <ArrayBars array={array} />
        </div>

        {/* Box 2: Pseudocode */}
        <div
          style={{
            flex: 3,
            backgroundColor: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <PseudoCode />
        </div>

        {/* Box 3: Explanation */}
        <div
          style={{
            flex: 3,
            backgroundColor: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Explanation />
        </div>
      </div>
    </div>
  );
}
