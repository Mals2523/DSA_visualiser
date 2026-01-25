export default function Explanation() {
  return (
    <div>
      <h3 style={{ color: "#a5b4fc" }}>How Bubble Sort Works</h3>

      <ul style={{ lineHeight: "1.6" }}>
        <li>Compare adjacent elements one by one.</li>
        <li>If the left element is larger, swap them.</li>
        <li>The largest element "bubbles" to the end after each pass.</li>
        <li>The process repeats for the remaining unsorted portion.</li>
        <li>Sorting stops when no swaps are needed.</li>
      </ul>
    </div>
  );
}
