import { motion } from "framer-motion";
import SubjectCards from "../cards/SubjectCards";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .8 }}
      style={{
        textAlign: "center",
        color: "white",
        zIndex: 10,
        position: "relative",
        maxWidth: "1100px",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "76px",
          fontWeight: 800,
        }}
      >
        NETVault
      </h1>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "22px",
          marginTop: "8px",
        }}
      >
        Built for NUST.
      </p>

      <h2
        style={{
          color: "#60a5fa",
          marginBottom: "25px",
        }}
      >
        Nothing Else.
      </h2>

      <p
        style={{
          color: "#CBD5E1",
          lineHeight: 1.8,
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        Practice Mathematics, Physics and English with structured chapters,
        topic-wise MCQs, AI explanations, progress tracking and realistic NUST
        NET mock tests.
      </p>

      <SubjectCards />
    </motion.section>
  );
}
