"use client";

export default function Error({ reset }) {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#243146", color: "#fff", padding: "2rem" }}>
      <div style={{ maxWidth: "560px", textAlign: "center" }}>
        <p style={{ marginBottom: "1rem", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#bcc6cc" }}>
          AF7 / Error
        </p>
        <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.8rem, 7vw, 5rem)", letterSpacing: "-0.06em", margin: "0 0 1rem" }}>
          Something went wrong.
        </h1>
        <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "rgba(255,255,255,0.74)", margin: "0 0 2rem" }}>
          The page could not be loaded. Please retry or return to the AF7 homepage.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            background: "#fff",
            color: "#243146",
            border: "none",
            minHeight: "52px",
            padding: "0 1.25rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
