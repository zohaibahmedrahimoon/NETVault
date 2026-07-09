import { motion } from "framer-motion";
import AnimatedBackground from "./components/background/AnimatedBackground";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#111827 0%,#0B1120 40%,#050816 100%)",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          color: "white",
          padding: "40px",
        }}
      >
        <motion.h1
          initial={{ scale: 0.92 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "78px",
            fontWeight: 800,
            letterSpacing: "2px",
            marginBottom: "12px",
          }}
        >
          NETVault
        </motion.h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "22px",
            marginBottom: "10px",
          }}
        >
          Built for NUST.
        </p>

        <h2
          style={{
            color: "#60a5fa",
            fontSize: "28px",
            marginBottom: "35px",
          }}
        >
          Nothing Else.
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "16px 42px",
            borderRadius: "14px",
            background: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: 700,
            boxShadow: "0 0 40px rgba(37,99,235,.45)",
          }}
        >
          Start Your Journey
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: "45px",
            color: "#94a3b8",
            fontSize: "15px",
          }}
        >
          Engineering NET Preparation Platform
        </motion.p>
      </motion.div>
    </main>
  );
}

export default App;
