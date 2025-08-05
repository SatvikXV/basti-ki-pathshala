// components/About.jsx

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Lighting the path to a brighter future.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Basti Ki Pathshala Foundation is a non-profit organization dedicated to bringing quality education to the doorsteps of children in slums and underserved communities. We believe that every child, regardless of their circumstances, deserves the chance to learn, dream, and succeed.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Our Mission */}
          <div className="p-8 bg-yellow-50 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to break the cycle of poverty through the transformative power of education and empowerment. We provide free, quality learning opportunities, fostering a safe and nurturing environment where children can build a strong foundation for a secure future.
            </p>
          </div>

          {/* Our Vision */}
          <div className="p-8 bg-blue-50 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We envision a world where every child has equitable access to education, empowering them to become confident, compassionate, and responsible citizens. We aim to create a sustainable model of community-led education that can be replicated across the nation.
            </p>
          </div>
        </div>
      </section>

       {/* Our Approach Section */}
       <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
                We set up small, informal learning centers within the communities we serve. Our curriculum is tailored to meet the unique needs of our students, focusing on literacy, numeracy, and critical thinking. We rely on a dedicated team of volunteers who are passionate about making a difference.
            </p>
        </div>
      </section>
    </div>
  );
}