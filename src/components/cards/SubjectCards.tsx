import { motion } from "framer-motion";

const subjects = [
  {
    title: "Mathematics",
    questions: "100 MCQs",
    color: "#2563eb",
    icon: "🧮",
  },
  {
    title: "Physics",
    questions: "60 MCQs",
    color: "#06b6d4",
    icon: "⚛️",
  },
  {
    title: "English",
    questions: "40 MCQs",
    color: "#8b5cf6",
    icon: "📖",
  },
];

export default function SubjectCards() {
  return (
    <div
      style={{
        marginTop: "70px",
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        flexWrap: "wrap",
      }}
    >
      {subjects.map((subject) => (
        <motion.div
          key={subject.title}
          whileHover={{
            scale: 1.05,
            y: -8,
          }}
          transition={{
            duration: 0.25,
          }}
          style={{
            width: "240px",
            padding: "28px",

            borderRadius: "20px",

            background: "rgba(255,255,255,.06)",

            backdropFilter: "blur(18px)",

            border: "1px solid rgba(255,255,255,.08)",

            cursor: "pointer",

            textAlign: "center",

            boxShadow: `0 0 25px ${subject.color}25`,
          }}
        >
          <div
            style={{
              fontSize: "52px",
              marginBottom: "15px",
            }}
          >
            {subject.icon}
          </div>

          <h2
            style={{
              color: "white",
              marginBottom: "10px",
              fontSize: "24px",
            }}
          >
            {subject.title}
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            {subject.questions}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
