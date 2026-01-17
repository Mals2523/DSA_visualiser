import { useState } from "react";
import ArrayBars from "./components/ArrayBars";
import Controls from "./components/Controls";

import PseudoCode from "./components/PseudoCode";
import Explanation from "./components/Explanation";

import SelectionPseudo from "./components/SelectionPseudo";
import SelectionExplain from "./components/SelectionExplain";

import MergePseudo from "./components/MergePseudo";
import MergeExplain from "./components/MergeExplain";

import QuickPseudo from "./components/QuickPseudo";
import QuickExplain from "./components/QuickExplain";


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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {/* Box 1: Visualizer */}
        <div style={{ flex: 3 }}>
          <ArrayBars array={array} />
        </div>

        {/* Box 2: Pseudocode */}
        <div style={{ flex: 2, background: "#1e293b", padding: "20px" }}>
          {selectedAlgo === "bubble" && <PseudoCode />}
          {selectedAlgo === "selection" && <SelectionPseudo />}
          {selectedAlgo === "merge" && <MergePseudo />}
          {selectedAlgo === "quick" && <QuickPseudo />}

        </div>

        {/* Box 3: Explanation */}
        <div style={{ flex: 2, background: "#1e293b", padding: "20px" }}>
          {selectedAlgo === "bubble" && <Explanation />}
          {selectedAlgo === "selection" && <SelectionExplain />}
          {selectedAlgo === "merge" && <MergeExplain />}
          {selectedAlgo === "quick" && <QuickExplain />}
        </div>
      </div>
    </div>
  );
}
