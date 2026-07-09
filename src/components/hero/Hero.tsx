import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        textAlign: "center",
        color: "white",
        zIndex: 10,
        position: "relative",
        maxWidth: "900px",
        padding: "40px"
      }}
    >
      <motion.h1
        initial={{ scale: 0.92 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: "76px",
          fontWeight: 800,
          marginBottom: "10px"
        }}
      >
        NETVault
      </motion.h1>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "22px"
        }}
      >
        Built for NUST.
      </p>

      <h2
        style={{
          color: "#60a5fa",
          marginTop: "6px",
          marginBottom: "30px",
          fontSize: "28px"
        }}
      >
        Nothing Else.
      </h2>

      <p
        style={{
          color: "#CBD5E1",
          fontSize: "18px",
          lineHeight: 1.8,
          marginBottom: "35px"
        }}
      >
        One platform for Mathematics, Physics and English preparation
        specifically designed for the NUST Engineering Entry Test.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "18px 42px",
          borderRadius: "14px",
          cursor: "pointer",
          fontWeight: 700,
          fontSize: "18px",
          boxShadow: "0 0 35px rgba(37,99,235,.45)"
        }}
      >
        Start Practicing
      </motion.button>
    </motion.section>
  );
}
