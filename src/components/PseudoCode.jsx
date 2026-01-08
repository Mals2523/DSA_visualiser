function PseudoCode() {
  return (
    <div
      style={{
        width: "40%",
        height: "320px",
        padding: "20px",
        backgroundColor: "#1f2937",
        color: "#e5e7eb",
        borderRadius: "10px",
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h3 style={{ color: "#93c5fd", marginBottom: "12px" }}>
        Bubble Sort – Pseudocode
      </h3>

      <pre style={{ lineHeight: "1.6" }}>
{`for i = 0 to n-1
  for j = 0 to n-i-2
    if arr[j] > arr[j+1]
      swap(arr[j], arr[j+1])`}
      </pre>
    </div>
  );
}

export default PseudoCode;
