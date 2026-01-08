import { bubbleSortSteps } from "../algorithms/bubbleSort";

function Controls({ array, setArray }) {
  const generateArray = () => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(Math.floor(Math.random() * 100) + 10);
    }
    setArray(arr);
  };

  const bubbleSort = async () => {
    if (!array || array.length === 0) return;

    const steps = bubbleSortSteps(array);

    for (let step of steps) {
      setArray(step.array);
      await new Promise((res) => setTimeout(res, 200));
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={generateArray}>Generate Array</button>

      <button
        onClick={bubbleSort}
        style={{ marginLeft: "10px" }}
      >
        Bubble Sort
      </button>
    </div>
  );
}

export default Controls;
