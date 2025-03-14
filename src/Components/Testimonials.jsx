import React, { useState, useEffect, useRef } from "react";

const TestimonialsSlider = () => {
  const testimonialsData = [
    {
      id: 1,
      quote:
        "Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Mr immediate remaining conveying allowance do or.",
      name: "John Abraham",
      title: "DENTAL PATIENTS",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      id: 2,
      quote:
        "Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Mr immediate remaining conveying allowance do or.",
      name: "Kriti Sairi",
      title: "PATIENT OF SURGERY",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonialsData.length]);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Patient Testimonials
        </h2>
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full bg-white rounded-lg shadow-md p-6 flex flex-col items-center md:items-start"
              >
                <div className="text-blue-500 text-4xl mb-4">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="text-gray-700 text-center md:text-left mb-4">
                  {testimonial.quote}
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
