import { bubbleSortSteps } from "../Algorithms/bubbleSort";
import { selectionSortSteps } from "../Algorithms/selectionSort";

function Controls({ array, setArray, setSelectedAlgo }) {

  const generateArray = () => {
    const newArr = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 300)
    );
    setArray(newArr);
  };

  const bubbleSort = async () => {
    setSelectedAlgo("bubble");
    const steps = bubbleSortSteps(array);
    for (const step of steps) {
      setArray(step.array);
      await new Promise(res => setTimeout(res, 150));
    }
  };

  const selectionSort = async () => {
    setSelectedAlgo("selection");
    const steps = selectionSortSteps(array);
    for (const step of steps) {
      setArray(step.array);
      await new Promise(res => setTimeout(res, 150));
    }
  };

  return (
    <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
      <button onClick={generateArray}>Generate Array</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <button onClick={selectionSort}>Selection Sort</button>
    </div>
  );
}

export default Controls;
