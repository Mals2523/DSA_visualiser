export default function MergeExplain() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h3 style={{ color: "#a5b4fc" }}>How Merge Sort Works</h3>

      <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
        <li>Divide the array into two halves.</li>
        <li>Recursively sort the left half.</li>
        <li>Recursively sort the right half.</li>
        <li>Merge the two sorted halves together.</li>
        <li>During merge, pick the smallest from both halves.</li>
      </ul>
    </div>
  );
}
