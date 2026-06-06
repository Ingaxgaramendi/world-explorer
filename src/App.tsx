import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/ui/Navbar";
import Home from "@/pages/Home";
import Entities from "@/pages/Entities";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground antialiased">
        {/* Tu barra de navegación fija arriba */}
        <Navbar />

        {/* Contenedor principal de las páginas */}
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entities" element={<Entities />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
