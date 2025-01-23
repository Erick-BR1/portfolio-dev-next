"use client";

import React, { useState } from "react";
import Image from "next/image";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import image5 from "../assets/images/image5.jpeg";
import image6 from "../assets/images/image6.jpeg";
import image7 from "../assets/images/image7.jpeg";

function GallerySlider() {
  const slides = [
    { img: image1, title: "Microsoft C#, Parte 1" },
    { img: image2, title: "Microsoft C#, Parte 2" },
    { img: image3, title: "Microsoft C#, Parte 3" },
    { img: image4, title: "Responsive Web Design" },
    { img: image5, title: "API Web - ASP.NET Core" },
    { img: image6, title: "Microsoft Challenge - foreach e if-elseif-else" },
    { img: image7, title: "Microsoft Challenge - Estruturas de ramificação" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-md w-full mx-auto py-5 px-4">
      <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-md">
        <Image
          src={slides[currentIndex].img}
          alt={slides[currentIndex].title}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold text-white">
          {slides[currentIndex].title}
        </h3>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrev}
          className="bg-slate-800 font-inter text-white px-4 py-2 rounded-full shadow-md hover:bg-slate-700"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-slate-800 font-inter text-white px-4 py-2 rounded-full shadow-md hover:bg-slate-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default GallerySlider;
