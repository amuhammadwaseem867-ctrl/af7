export default function Loading() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#243146", color: "#fff" }}>
      <div style={{ width: "min(420px, calc(100% - 2rem))", textAlign: "center" }}>
        <div style={{ width: "100%", height: "2px", background: "rgba(255,255,255,0.14)", overflow: "hidden" }}>
          <div style={{ width: "38%", height: "100%", background: "#fff", animation: "loading-bar 1.4s ease-in-out infinite" }} />
        </div>
        <p style={{ marginTop: "1rem", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#bcc6cc" }}>
          AF7 / Loading
        </p>
      </div>
    </main>
  );
}
