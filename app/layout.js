export const metadata = {
  title: "Freedom Fly Travel",
  description: "Travel booking website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
