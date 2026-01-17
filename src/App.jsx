import { useState } from "react";
import ArrayBars from "./components/ArrayBars";
import Controls from "./components/Controls";
import PseudoCode from "./components/PseudoCode";
import Explanation from "./components/Explanation";
import SelectionPseudo from "./components/SelectionPseudo";
import SelectionExplain from "./components/SelectionExplain";


export default function App() {
  const [array, setArray] = useState([]);
  const [selectedAlgo, setSelectedAlgo] = useState("bubble");


  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        DSA Learning Visualizer
      </h1>

      <Controls
  array={array}
  setArray={setArray}
  setSelectedAlgo={setSelectedAlgo}
/>


      

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
        {/* Visualizer */}
        <div style={{ flex: 2, backgroundColor: "#0f172a", padding: "20px" }}>
          <ArrayBars array={array} />
        </div>

        {/* Pseudocode */}
        <div style={{ flex: 2, backgroundColor: "#1e293b", padding: "20px" }}>
          {selectedAlgo === "bubble" ? <PseudoCode /> : <SelectionPseudo />}
        </div>

        {/* Explanation */}
        <div style={{ flex: 2, backgroundColor: "#1e293b", padding: "20px" }}>
          {selectedAlgo === "bubble" ? <Explanation /> : <SelectionExplain />}
        </div>
      </div>
    
        
        </div>
  );
}
