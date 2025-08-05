// Home.jsx
import { Link } from 'react-router-dom'; // Import Link
import heroBg from '../assets/hero.jpg';

export default function Home() {
  return (
    <section
      className="bg-cover bg-center min-h-[95vh] flex items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
      }}
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Education is the path from darkness to light.
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Join us in our mission to empower underprivileged children through education.
        </p>
        {/* Use Link component and themed button style */}
        <Link
          to="/volunteer"
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Become a Volunteer
        </Link>
      </div>
    </section>
  );
}