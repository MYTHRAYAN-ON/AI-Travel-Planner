import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set the video to play in slow motion
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust the rate (0.5 = half speed)
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video.mp4" // Replace with your video path
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-logo text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
            Travia
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
            Discover Your Dream Journey
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
            Explore the world with AI-powered trip planning. Personalized
            recommendations for hotels, places to visit, and travel insights—all
            in one place.
          </p>
          <Link to={"/create-trip"}>
            <Button variant="secondary" size="lg" className="mt-6">
              Get Started, It's Free
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full  ">
          <div className="relative bg-transparent h-[82px] flex items-end text-center  ">
            {/* Wave */}
            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[url('https://1.bp.blogspot.com/-NYl6L8pz8B4/XoIVXwfhlNI/AAAAAAAAU3k/nxJKiLT706Mb7jUFiM5vdCsOSNnFAh0yQCLcBGAsYHQ/s1600/hero-wave.png')] bg-cover bg-repeat-x animate-wave "></div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section id='how-it-works' className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Step 1 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-500 transition-colors duration-300">
              Choose Your Destination
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Enter your dream location and travel preferences to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-green-500 transition-colors duration-300">
              Customize Your Journey
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Adjust the itinerary, budget, and duration to match your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors duration-300">
              Explore with Confidence
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Receive tailored recommendations for hotels, places, and
              activities.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className="bg-gradient-to-b from-white via-gray-50 to-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-20">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl mx-auto">
          {/* Feature Cards */}
          {[
            {
              color: "bg-[#C46781]",
              icon: "/icons/AI-icon.png",
              title: "AI-Powered Trip Planning",
              description:
                "Experience smarter trip planning with our advanced AI engine.",
            },
            {
              color: "bg-[#FFB538]",
              icon: "/icons/hotel-recommendation.png",
              title: "Hotel Recommendations",
              description:
                "Discover the best hotels that fit your budget and preferences.",
            },
            {
              color: "bg-[#D06ACA]",
              icon: "/icons/itineraries.png",
              title: "Custom Itineraries",
              description:
                "Tailor your trip itinerary to match your unique needs.",
            },
            {
              color: "bg-[#1F8996]",
              icon: "/icons/places-to-visit.png",
              title: "Places to Visit",
              description:
                "Get personalized recommendations for must-visit attractions.",
            },
            {
              color: "bg-[#DB4596]",
              icon: "/icons/budget-management.png",
              title: "Budget Management",
              description:
                "Keep your travel expenses in check with our budgeting tools.",
            },
            {
              color: "bg-[#5BE4A9]",
              icon: "/icons/easy-to-use.png",
              title: "Easy to Use",
              description:
                "A user-friendly interface designed for effortless trip planning.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`relative w-full h-full group flex flex-col items-center ${feature.color}  text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Icon */}
              <img
                  src={feature.icon}
                  alt={feature.title}
                  className="absolute -top-20 w-44 h-44 object-contain"
                />
              

              {/* Content */}
              <div className="mt-24 text-center flex flex-col  items-center">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;










