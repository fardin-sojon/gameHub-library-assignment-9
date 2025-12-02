import React from "react";
import gallery1 from "../../assets/gallery/gallery1.jpg";
import gallery2 from "../../assets/gallery/gallery2.jpg";
import gallery3 from "../../assets/gallery/gallery3.webp";
import gallery4 from "../../assets/gallery/gallery4.jpg";
import gallery5 from "../../assets/gallery/gallery5.jpg";

const Gallery = ({ images }) => {
  const galleryImages = images || [
    { src: gallery4, alt: "Image 1" },
    { src: gallery1, alt: "Image 2" },
    { src: gallery2, alt: "Image 3" },
    { src: gallery3, alt: "Image 4" },
    { src: gallery5, alt: "Image 5" },
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold text-black">Gallery</h2>
      <p className="text-gray-400 m-5">
        Explore highlights from our gaming community — tournaments, live events,
        and top plays. <br /> Every snapshot captures excitement, teamwork, and epic
        moments.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto ">
        {/* Left large column */}
        <div className="md:col-span-1">
          <img
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Middle column with two stacked images */}
        <div className="flex flex-col gap-4">
          <img
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            className="rounded-xl w-full object-cover"
          />
          <img
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Right column - vertical collage */}
        <div className="flex flex-col gap-4">
          <img
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            className="rounded-xl w-full object-cover"
          />
          <img
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            className="rounded-xl w-full flex-1 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
