export default function SelectionExplain() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h3 style={{ color: "#a5b4fc", marginBottom: "10px" }}>
        How Selection Sort Works
      </h3>

      <ul style={{ paddingLeft: "20px", lineHeight: "1.6", margin: 0 }}>
        <li>Start from the first index.</li>
        <li>Find the smallest element in the unsorted portion.</li>
        <li>Mark it as the new minimum.</li>
        <li>Swap it with the starting position.</li>
        <li>Move to the next index and repeat.</li>
      </ul>
    </div>
  );
}
