const Passenger = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚗 Passenger 專區</h1>
        <p style={styles.subtitle}>本區施工中</p>

        <div style={styles.notice}>
          <p>🔧 功能規劃中：</p>
          <ul>
            <li>乘客申請成為司機</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    minHeight: "100vh",
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
    color: "#333",
  },
  subtitle: {
    color: "#ff9800",
    fontWeight: "bold",
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

export default Passenger;
