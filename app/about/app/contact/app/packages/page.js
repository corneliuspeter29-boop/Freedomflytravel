export default function Packages() {
  const packages = [
    {
      title: "Dubai Holiday Package",
      description: "Explore Dubai with hotels, tours & desert safari.",
      price: "Starting from $499"
    },
    {
      title: "Turkey Tour Package",
      description: "Visit Antalya, Istanbul, Cappadocia & more.",
      price: "Starting from $599"
    },
    {
      title: "Worldwide Travel",
      description: "Custom trips to Europe, Asia, Africa & more.",
      price: "Customized pricing"
    }
  ];

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Our Travel Packages</h1>

      {packages.map((pkg, index) => (
        <div 
          key={index} 
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{pkg.title}</h2>
          <p>{pkg.description}</p>
          <strong>{pkg.price}</strong>
        </div>
      ))}
    </main>
  );
}
