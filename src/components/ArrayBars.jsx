export default function ArrayBars({ array }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end", // bars stick to bottom
        justifyContent: "center",
        gap: "8px",
        height: "300px",        // FIXED HEIGHT
        padding: "15px",
        overflow: "hidden",     // prevents bars from escaping
        borderRadius: "12px",
        
        
      }}
    >
      {array.map((value, index) => (
        <div
          key={index}
          style={{
            width: "16px",
            backgroundColor: "#6366f1",
            height: `${value}px`,  // bar height
            borderRadius: "4px",
            transition: "all 0.2s ease",
          }}
        ></div>
      ))}
    </div>
  );
}
