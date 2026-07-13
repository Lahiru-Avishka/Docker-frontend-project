function App() {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a", // dark blue
    color: "#e5e7eb",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  };

  const h1Style = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#38bdf8",
  };

  const h2Style = {
    fontSize: "1.8rem",
    marginBottom: "8px",
    color: "#a5f3fc",
  };

  const h3Style = {
    fontSize: "1.2rem",
    fontWeight: "normal",
    color: "#cbd5f5",
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Lahiru Madhusanka</h1>
      <h2 style={h2Style}>Demo Frontend Project</h2>
      <h3 style={h3Style}>React App Dockerized with Vite</h3>
      <h3 style={h3Style}>*********</h3>
    </div>
  );
}

export default App;
