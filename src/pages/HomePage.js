import React from "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚘 HOV共乘系統</h1>
        <p style={styles.subtitle}>歡迎使用本平台</p>

        <div style={styles.notice}>
          <strong>
            <p>高乘載管制期間 公佈欄：</p>
          </strong>
          <ul>
            <li>農曆年假: 2026/02/13-2026/02/15</li>
            <li>228連假: 2026/02/27-2026/02/28</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    width: "420px",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
    color: "rgb(155, 107, 155)", // 🔹 跟 nav 呼應
  },
  subtitle: {
    color: "#666",
    marginBottom: "20px",
  },
  notice: {
    textAlign: "left",
    background: "#f9fafb",
    padding: "15px",
    borderRadius: "8px",
    color: "#555",
  },
};

export default HomePage;
