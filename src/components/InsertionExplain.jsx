export default function InsertionExplain() {
  return (
    <div>
      <h3 style={{ color: "#a5b4fc" }}>How Insertion Sort Works</h3>

      <ul style={{ lineHeight: "1.6" }}>
        <li>Start from the second element.</li>
        <li>Compare it with elements before it.</li>
        <li>Shift larger elements one step to the right.</li>
        <li>Insert the current element into its correct position.</li>
        <li>Repeat until the whole array is sorted.</li>
      </ul>
    </div>
  );
}

