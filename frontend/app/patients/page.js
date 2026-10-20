"use client";

import { useEffect, useState } from "react";

export default function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3001/patients.json", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "900px",
          background: "#fff",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "25px",
          }}
        >
          🏥 Patient Management System
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead>
            <tr style={{ background: "#2563eb", color: "white" }}>
              <th style={{ padding: "15px" }}>ID</th>
              <th style={{ padding: "15px" }}>Name</th>
              <th style={{ padding: "15px" }}>Address</th>
              <th style={{ padding: "15px" }}>Location</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={patient.id}
                style={{
                  background: index % 2 === 0 ? "#f8fafc" : "#ffffff",
                }}
              >
                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  {patient.id}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  {patient.name}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  {patient.address}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  {patient.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#666",
            fontWeight: "bold",
          }}
        >
          Total Patients: {patients.length}
        </p>
      </div>
    </div>
  );
}