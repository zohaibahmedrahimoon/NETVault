import { motion } from "framer-motion";

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #14213d 0%, #0b1120 45%, #050816 100%)",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "#2563eb",
          filter: "blur(180px)",
          opacity: 0.18,
          borderRadius: "50%",
          top: "-150px",
          right: "-120px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        style={{
          textAlign: "center",
          zIndex: 2,
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            marginBottom: "12px",
            letterSpacing: "2px",
          }}
        >
          NETVault
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            marginBottom: "8px",
          }}
        >
          Built for NUST.
        </p>

        <p
          style={{
            fontSize: "22px",
            color: "#60a5fa",
            fontWeight: 700,
            marginBottom: "40px",
          }}
        >
          Nothing Else.
        </p>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "16px 36px",
            borderRadius: "14px",
            border: "none",
            background: "#2563eb",
            color: "#fff",
            fontSize: "18px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 0 25px rgba(37,99,235,.45)",
          }}
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </main>
  );
}

export default App;
