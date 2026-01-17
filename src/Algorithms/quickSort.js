export function quickSortSteps(arr) {
  const steps = [];
  const array = [...arr];

  function quickSort(left, right) {
    if (left >= right) return;

    const pivotIndex = partition(left, right);

    quickSort(left, pivotIndex - 1);
    quickSort(pivotIndex + 1, right);
  }

  function partition(left, right) {
    const pivot = array[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {

      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];

        steps.push({ array: [...array] });
      }
    }

    // Move pivot to correct sorted position
    [array[i + 1], array[right]] = [array[right], array[i + 1]];

    steps.push({ array: [...array] });

    return i + 1;
  }

  quickSort(0, array.length - 1);

  return steps;
}
