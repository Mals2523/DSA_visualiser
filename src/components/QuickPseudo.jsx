export default function QuickPseudo() {
  return (
    <div style={{ fontFamily: "monospace" }}>
      <h3 style={{ color: "#93c5fd" }}>Quick Sort – Pseudocode</h3>

<pre>{`function quickSort(arr, left, right):
    if left >= right: return

    pivotIndex = partition(arr, left, right)

    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)

function partition(arr, left, right):
    pivot = arr[right]
    i = left - 1

    for j = left to right-1:
        if arr[j] < pivot:
            i++
            swap(arr[i], arr[j])

    swap(arr[i+1], arr[right])
    return i+1`}</pre>
    </div>
  );
}
