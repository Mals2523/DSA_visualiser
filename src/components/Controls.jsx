import { bubbleSortSteps } from "../Algorithms/bubbleSort";
import { selectionSortSteps } from "../Algorithms/selectionSort";
import { mergeSortSteps } from "../Algorithms/mergeSort";
import { quickSortSteps } from "../Algorithms/quickSort";


function Controls({ array, setArray, setSelectedAlgo }) {

  const generateArray = () => {
    const newArr = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 250) + 20
    );
    setArray(newArr);
  };

  const bubbleSort = async () => {
    setSelectedAlgo("bubble");
    const steps = bubbleSortSteps(array);

    for (const step of steps) {
      setArray(step.array);
      await new Promise(res => setTimeout(res, 120));
    }
  };

  const selectionSort = async () => {
    setSelectedAlgo("selection");
    const steps = selectionSortSteps(array);

    for (const step of steps) {
      setArray(step.array);
      await new Promise(res => setTimeout(res, 120));
    }
  };

  const mergeSort = async () => {
    setSelectedAlgo("merge");
    const steps = mergeSortSteps(array);

    for (const step of steps) {
      setArray(step.array);
      await new Promise(res => setTimeout(res, 120));
    }
  };

  const quickSort = async () => {
  if (!array.length) return;

  setSelectedAlgo("quick");

  const steps = quickSortSteps(array);

  for (const step of steps) {
    setArray(step.array);
    await new Promise(res => setTimeout(res, 120));
  }
};


  return (
    <div style={{ display: "flex", gap: "12px", marginTop: "15px" }}>
      <button onClick={generateArray}>Generate Array</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <button onClick={selectionSort}>Selection Sort</button>
      <button onClick={mergeSort}>Merge Sort</button>
      <button onClick={quickSort}>Quick Sort</button>

    </div>
  );
}

export default Controls;
