export default function InsertionPseudo() {
  return (
    <div style={{ fontFamily: "monospace" }}>
      <h3 style={{ color: "#93c5fd" }}>Insertion Sort – Pseudocode</h3>

<pre>{`for i = 1 to n-1:
    key = arr[i]
    j = i - 1

    while j >= 0 and arr[j] > key:
        arr[j+1] = arr[j]
        j--

    arr[j+1] = key`}</pre>
    </div>
  );
}
