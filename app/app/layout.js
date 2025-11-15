export const metadata = {
  title: "Freedom Fly Travel",
  description: "Your trusted travel partner for global adventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", margin: 0, padding: 0 }}>
        <nav
          style={{
            background: "#0077cc",
            padding: "15px",
            display: "flex",
            gap: "20px",
          }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </nav>

        <main style={{ padding: "40px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
