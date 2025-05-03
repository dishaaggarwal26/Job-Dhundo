import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
  <button
    aria-label="Previous testimonial"
    className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200 transition"
    onClick={onClick}
  >
    &lt;
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    aria-label="Next testimonial"
    className="absolute right-0 z-10 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200 transition"
    onClick={onClick}
  >
    &gt;
  </button>
);

const StarRating = ({ rating }) => (
  <div className="flex justify-center space-x-1 text-yellow-400 mb-2">
    {[...Array(5)].map((_, i) => (
      <span key={i}>{i < rating ? "★" : "☆"}</span>
    ))}
  </div>
);

const Content5 = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/testimonials")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12 px-4">
          <h1 className="text-4xl font-extrabold text-gray-900">
            What People Say About Us
          </h1>
          <p className="text-lg text-pink-700 mt-2">
            Real experiences from people who found their dream jobs.
          </p>
        </header>

        <div className="relative px-2 sm:px-6">
          <Slider {...settings}>
          {Array.isArray(testimonials) && testimonials.map((t, i) => (
              <div key={i} className="px-2 sm:px-3">
                <div className="bg-gradient-to-t from-pink-200 to-pink-300 rounded-2xl shadow-lg p-4 sm:p-6 text-center relative h-full">
                  <img
                    loading="lazy"
                    src={t.imageUrl}
                    alt={t.name}
                    className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 border-4 border-white object-cover"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold">{t.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-900">
                    {t.jobRole}
                  </p>
                  <p className="text-xs text-gray-800 mb-2">Hired: {t.date}</p>
                  <StarRating rating={t.rating} />
                  <div className="bg-white text-gray-800 rounded-lg p-3 sm:p-4 mt-4 shadow-inner text-xs sm:text-sm relative">
                    <span className="absolute text-3xl -top-3 left-4 text-gray-300">
                      “
                    </span>

                    {expanded === i ? (
                      <>
                        <p className="font-semibold mb-2">{t.quote}</p>
                        <p>{t.details}</p>
                      </>
                    ) : (
                      <p>{`${t.quote.slice(0, 100)}...`}</p>
                    )}

                    <span className="absolute text-3xl -bottom-3 right-4 text-gray-300">
                      ”
                    </span>

                    {t.details.length > 0 && (
                      <button
                        onClick={() => setExpanded(expanded === i ? null : i)}
                        className="block text-blue-600 text-xs mt-2 hover:underline"
                      >
                        {expanded === i ? "Read less" : "Read more"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center mt-12">
          <Link to="/Jobs">
            <button className="inline-block bg-pink-600 rounded-xl text-white text-lg px-6 py-3">
              Find Your Job Now
            </button>
          </Link>
        </div>

        <footer className="mt-16 text-center text-gray-900 text-sm">
          <p>
            Have a success story to share?{" "}
            <Link to="/submit" className="text-blue-800 hover:underline">
              Submit yours
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Content5;
