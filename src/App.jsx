// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"; // Import the About component
import VolunteerForm from "./components/VolunteerForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      {/* Add padding-top to main to offset the fixed navbar */}
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add the route for the About page */}
          <Route path="/about" element={<About />} />
          <Route path="/volunteer" element={<VolunteerForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;