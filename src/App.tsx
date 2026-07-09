import AnimatedBackground from "./components/background/AnimatedBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";

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
        alignItems: "center"
      }}
    >
      <AnimatedBackground />

      <Navbar />

      <Hero />
    </main>
  );
}

export default App;
