function Explanation() {
  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        backgroundColor: "#1f2937",
        color: "#e5e7eb",
        borderRadius: "10px",
        fontFamily: "sans-serif",
      }}
    >
      <h3
        style={{
          color: "#a5b4fc",
          marginBottom: "10px",
        }}
      >
        How Bubble Sort Works
      </h3>

      <ul
        style={{
          paddingLeft: "18px",
          lineHeight: "1.6",
          margin: 0,
        }}
      >
        <li>Compare adjacent elements one by one.</li>
        <li>If the left element is larger, swap them.</li>
        <li>The largest element moves to the end after each pass.</li>
        <li>The process repeats for the remaining elements.</li>
        <li>Sorting stops when no swaps are needed.</li>
      </ul>
    </div>
  );
}

export default Explanation;
