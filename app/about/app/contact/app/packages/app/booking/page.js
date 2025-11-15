"use client";

import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    destination: "",
    date: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Booking request submitted! We will contact you soon.");
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Travel Booking Form</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          required
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          required
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        />

        <label>Destination</label>
        <input
          name="destination"
          type="text"
          required
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        />

        <label>Travel Date</label>
        <input
          name="date"
          type="date"
          required
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Submit Booking
        </button>
      </form>
    </main>
  );
}
