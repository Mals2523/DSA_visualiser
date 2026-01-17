export function mergeSortSteps(arr) {
  const steps = [];
  const array = [...arr];

  function mergeSort(left, right) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    mergeSort(left, mid);
    mergeSort(mid + 1, right);
    merge(left, mid, right);
  }

  function merge(left, mid, right) {
    let i = left;
    let j = mid + 1;
    const temp = [];

    while (i <= mid && j <= right) {
      if (array[i] <= array[j]) {
        temp.push(array[i++]);
      } else {
        temp.push(array[j++]);
      }
    }

    while (i <= mid) temp.push(array[i++]);
    while (j <= right) temp.push(array[j++]);

    for (let k = left; k <= right; k++) {
      array[k] = temp[k - left];

      // each update is one animation step
      steps.push({
        array: [...array]
      });
    }
  }

  mergeSort(0, array.length - 1);
  return steps;
}
