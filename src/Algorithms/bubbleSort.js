export function bubbleSortSteps(arr) {
  const steps = [];
  const array = [...arr];

  for (let i = 0; i < array.length; i++) {
    let swapped = false;

    for (let j = 0; j < array.length - i - 1; j++) {
      
      // Compare animation
      steps.push({
        array: [...array],
        highlights: { compare: [j, j + 1] }
      });

      if (array[j] > array[j + 1]) {
        // Swap animation
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;

        steps.push({
          array: [...array],
          highlights: { swap: [j, j + 1] }
        });
      }
    }

    // Mark sorted element
    steps.push({
      array: [...array],
      highlights: { sorted: array.length - 1 - i }
    });

    if (!swapped) break;
  }

  return steps;
}
