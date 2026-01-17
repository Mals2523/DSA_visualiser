export function bubbleSortSteps(arr) {
  const steps = [];
  const array = [...arr];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // Compare step
      steps.push({
        type: "compare",
        indices: [j, j + 1],
        array: [...array],
      });

      if (array[j] > array[j + 1]) {
        // Swap
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        steps.push({
          type: "swap",
          indices: [j, j + 1],
          array: [...array],
        });
      }
    }
  }

  return steps;
}
