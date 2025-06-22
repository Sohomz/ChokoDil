import React from "react";
// Assuming you have images like these in your project for visual flair
import founderImage from "../images/smallChocolate.png"; // Placeholder: replace with actual founder image if available
import chocolateFactoryImage from "../images/chocolate.png"; // Re-using an existing image for theme
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-2xl space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Our Sweet Story
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At ChokoDil, we don't just make chocolates and cakes; we craft
            edible moments of joy, baked with passion and love.
          </p>
        </div>

        {/* Our Mission & Philosophy */}
        <section className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={chocolateFactoryImage} // Re-using an image for context
              alt="ChocoDil Mission"
              className="rounded-lg shadow-lg w-full h-64 object-cover object-center transform hover:scale-105 transition duration-300"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/600x400/FFD1DC/6B46C1?text=ChocoDil+Mission";
              }}
            />
          </div>
          <div className="md:w-1/2 text-gray-700 space-y-4">
            <h3 className="text-3xl font-bold text-pink-700">
              Our Mission: Spreading Happiness, One Bite at a Time
            </h3>
            <p>
              Born from a dream to share the purest forms of sweetness, ChokoDil
              is dedicated to creating high-quality, handcrafted chocolates and
              cakes that bring smiles to faces and warmth to hearts. We believe
              in the magic of simple ingredients transformed into extraordinary
              delights.
            </p>
            <p>
              Every chocolate bar, every delicate mousse, and every grand
              celebration cake is a testament to our commitment to excellence,
              freshness, and unparalleled taste. We pour our heart and soul into
              every creation.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="text-center py-8 bg-purple-50 rounded-lg shadow-inner">
          <h3 className="text-3xl font-bold text-purple-700 mb-6">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <span className="text-5xl block mb-3">🍫</span>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Quality & Craftsmanship
              </h4>
              <p className="text-gray-600 text-sm">
                Using only the finest ingredients, meticulously crafted by
                skilled hands.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <span className="text-5xl block mb-3">💖</span>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Passion & Love
              </h4>
              <p className="text-gray-600 text-sm">
                Every creation is infused with a genuine passion for baking and
                delighting.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <span className="text-5xl block mb-3">😊</span>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Customer Happiness
              </h4>
              <p className="text-gray-600 text-sm">
                Your smiles are our biggest reward; your satisfaction is our
                priority.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Founder/Team (Conceptual) */}
        <section className="text-center py-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Meet the Mastermind Behind the Sweetness
          </h3>
          <div className="flex flex-col items-center max-w-md mx-auto">
            <img
              src={founderImage} // Placeholder for founder's image
              alt="GGs - Founder of ChokoDil"
              className="w-48 h-48 rounded-full object-cover object-top border-4 border-pink-300 shadow-xl mb-6"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/200x200/FFC0CB/6A0DAD?text=Founder";
              }}
            />
            <h4 className="text-2xl font-bold text-gray-800">GGs</h4>
            <p className="text-pink-600 text-lg italic mb-4">
              Founder & Head Chocolatier
            </p>
            <p className="text-gray-700">
              "From a young age, I found joy in the art of creating desserts.
              ChokoDil is the culmination of years of experimentation, learning,
              and an unwavering belief that the best moments in life are often
              shared over something sweet. My journey is about bringing that joy
              directly to you."
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center pt-8 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Taste the Magic?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Explore our delightful collection and find your next favorite sweet
            treat.
          </p>
          <Link
            to="/" // Link to your items page
            className="inline-block bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg 
                       hover:bg-pink-700 transform hover:scale-105 transition duration-300"
          >
            Shop Our Delights!
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
