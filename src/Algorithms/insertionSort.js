export function insertionSortSteps(arr) {
  const steps = [];
  const array = [...arr];

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];

      // record step
      steps.push({
        array: [...array]
      });

      j--;
    }

    array[j + 1] = key;

    // record placing key
    steps.push({
      array: [...array]
    });
  }

  return steps;
}

