import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page" style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#243146", color: "#fff", padding: "2rem" }}>
      <div style={{ maxWidth: "560px", textAlign: "center" }}>
        <p style={{ marginBottom: "1rem", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#bcc6cc" }}>
          AF7 / 404
        </p>
        <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.06em", margin: "0 0 1rem" }}>
          Page not found.
        </h1>
        <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "rgba(255,255,255,0.74)", margin: "0 0 2rem" }}>
          The page you are looking for does not exist or has moved. Return to the AF7 homepage to continue exploring our fastening components.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            minHeight: "52px",
            padding: "0 1.25rem",
            background: "#fff",
            color: "#243146",
            textDecoration: "none",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
