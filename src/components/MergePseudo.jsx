export default function MergePseudo() {
  return (
    <div style={{ fontFamily: "monospace" }}>
      <h3 style={{ color: "#93c5fd" }}>Merge Sort – Pseudocode</h3>

<pre>{`function mergeSort(arr):
    if size <= 1:
        return arr

    mid = n/2
    left = mergeSort(arr[0..mid])
    right = mergeSort(arr[mid+1..n])

    return merge(left, right)

function merge(left, right):
    create empty array result
    while both lists not empty:
        pick smaller element
        append to result
    append remaining elements
    return result`}</pre>
    </div>
  );
}
