export default function SelectionPseudo() {
  return (
    <div style={{ fontFamily: "monospace" }}>
      <h3 style={{ color: "#93c5fd", marginBottom: "12px" }}>
        Selection Sort – Pseudocode
      </h3>

      <pre style={{ lineHeight: "1.6" }}>
{`for i = 0 to n-1
  minIndex = i
  for j = i+1 to n-1
    if arr[j] < arr[minIndex]
      minIndex = j
  swap(arr[i], arr[minIndex])`}
      </pre>
    </div>
  );
}
