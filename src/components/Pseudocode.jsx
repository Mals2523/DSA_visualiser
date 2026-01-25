export default function PseudoCode() {
  return (
    <div style={{ fontFamily: "monospace" }}>
      <h3 style={{ color: "#93c5fd" }}>Bubble Sort – Pseudocode</h3>

      <pre>{`for i = 0 to n-1
    for j = 0 to n-i-2
        if arr[j] > arr[j+1]
            swap(arr[j], arr[j+1])`}</pre>
    </div>
  );
}
