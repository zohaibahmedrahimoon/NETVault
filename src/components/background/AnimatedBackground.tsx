import { motion } from "framer-motion";

const circles = [
  {
    size: 500,
    top: "-180px",
    right: "-150px",
    color: "#2563eb",
    delay: 0,
    duration: 9,
  },
  {
    size: 350,
    bottom: "-120px",
    left: "-100px",
    color: "#0ea5e9",
    delay: 1,
    duration: 11,
  },
  {
    size: 220,
    top: "45%",
    left: "60%",
    color: "#1d4ed8",
    delay: 0.5,
    duration: 8,
  },
];

export default function AnimatedBackground() {
  return (
    <>
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            repeat: Infinity,
            duration: circle.duration,
            delay: circle.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: circle.size,
            height: circle.size,
            borderRadius: "50%",
            background: circle.color,
            filter: "blur(160px)",
            pointerEvents: "none",

            top: circle.top,
            right: circle.right,
            bottom: circle.bottom,
            left: circle.left,
          }}
        />
      ))}
    </>
  );
}
