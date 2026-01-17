export function selectionSortSteps(arr) {
  const steps = [];
  const array = [...arr];

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    // Mark the starting point
    steps.push({
      type: "select",
      indices: [i],
      array: [...array]
    });

    for (let j = i + 1; j < array.length; j++) {
      // Comparing j with current minIndex
      steps.push({
        type: "compare",
        indices: [minIndex, j],
        array: [...array]
      });

      if (array[j] < array[minIndex]) {
        minIndex = j;

        // New minimum found
        steps.push({
          type: "newMin",
          indices: [minIndex],
          array: [...array]
        });
      }
    }

    // Swap minimum to front
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];

      steps.push({
        type: "swap",
        indices: [i, minIndex],
        array: [...array]
      });
    }
  }
  return steps;
}
