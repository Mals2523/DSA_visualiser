export default function QuickExplain() {
  return (
    <div>
      <h3 style={{ color: "#a5b4fc" }}>How Quick Sort Works</h3>

      <ul style={{ lineHeight: "1.6" }}>
        <li>Pick a pivot (usually the last element).</li>
        <li>Rearrange elements so that smaller values go left.</li>
        <li>Larger values go right.</li>
        <li>Place pivot between the two groups.</li>
        <li>Recursively quicksort the left and right parts.</li>
      </ul>
    </div>
  );
}
