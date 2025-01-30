import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="m-20 text-black">
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Hi there, this is Raj Aryan Dixit
        </h1>

        {/* About Content */}
        <div className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
          <p className="mb-6 text-xl">
            Hello! I'm{" "}
            <strong className="text-indigo-600">Raj Arvind Dixit</strong>, a
            passionate and dedicated individual pursuing a BTech in Computer
            Science and Engineering. With a keen interest in technology and
            innovation, I am constantly exploring ways to solve real-world
            problems through code and creativity.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            My Interests
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>
              <strong className="text-indigo-600">Frontend Development:</strong>{" "}
              I enjoy crafting visually appealing and user-friendly interfaces.
              I have experience with React.js, Tailwind CSS, and JavaScript.
            </li>
            <li>
              <strong className="text-indigo-600">Backend Development:</strong>{" "}
              Leveraging tools like Node.js and Express, I focus on building
              robust and scalable applications.
            </li>
            <li>
              <strong className="text-indigo-600">Generative AI:</strong> APIs
              like DALL·E inspire me to blend art and technology for innovative
              projects.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Vision
          </h2>
          <p className="mb-6 text-xl">
            My goal is to contribute meaningfully to the tech world while
            preparing for a career in the{" "}
            <strong className="text-indigo-600">
              Central Armed Police Forces (CAPF)
            </strong>
            . This unique combination of interests stems from my desire to serve
            society both through technology and defense.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Values I Stand By
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>
              <strong className="text-indigo-600">Integrity:</strong> Always
              staying true to my work and principles.
            </li>
            <li>
              <strong className="text-indigo-600">Growth:</strong> Continuously
              learning and improving in every aspect of life.
            </li>
            <li>
              <strong className="text-indigo-600">Community:</strong>{" "}
              Collaborating and giving back to the people around me.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
