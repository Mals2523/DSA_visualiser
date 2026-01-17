export default function ArrayBars({ array }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "8px",
        height: "300px",
        padding: "20px",
        backgroundColor: "#0f172a",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {array.map((value, i) => (
        <div
          key={i}
          style={{
            width: "16px",
            height: `${value}px`,
            backgroundColor: "#6366f1",
            borderRadius: "4px",
            transition: "all 0.2s ease",
          }}
        ></div>
      ))}
    </div>
  );
}
