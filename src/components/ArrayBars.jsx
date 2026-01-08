function ArrayBars({ array }) {
  return (
    <div
      style={{
        height: "320px",
        backgroundColor: "#111827",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      {array.map((value, idx) => (
        <div
          key={idx}
          style={{
            height: `${value * 2}px`,
            width: "18px",
            margin: "0 3px",
            backgroundColor: "#6366f1",
            borderRadius: "4px 4px 0 0",
          }}
        />
      ))}
    </div>
  );
}

export default ArrayBars;
