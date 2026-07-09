import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "18px 40px",

        backdropFilter: "blur(16px)",
        background: "rgba(8,15,30,.55)",

        borderBottom: "1px solid rgba(255,255,255,.08)"
      }}
    >
      {/* Logo */}

      <div
        style={{
          fontSize: "28px",
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "1px"
        }}
      >
        NET<span style={{ color: "#3b82f6" }}>Vault</span>
      </div>

      {/* Navigation */}

      <nav
        style={{
          display: "flex",
          gap: "28px",
          color: "#cbd5e1",
          fontWeight: 500
        }}
      >
        <a href="#">Home</a>
        <a href="#">Practice</a>
        <a href="#">Mock Test</a>
        <a href="#">Formula Vault</a>
        <a href="#">Progress</a>
      </nav>

      {/* Live Clock Placeholder */}

      <div
        style={{
          color: "#60a5fa",
          fontWeight: 700,
          fontSize: "17px"
        }}
      >
        --:--:--
      </div>
    </motion.header>
  );
}
