import React, { useState } from "react";
import PageHomeBanner from "../common/PageHomeBanner";

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const cards = [
    {
      image: "./home/dining3.jpg",
      title: "Furnishings & Decor",
      subtitle: "DINING",
    },
    {
      image: "./home/balcony2.jpg",
      title: "Furnishings & Decor",
      subtitle: "BALCONY",
    },
    {
      image: "./home/bathroom2.jpg",
      title: "Surfaces & Flooring",
      subtitle: "BATHROOM",
    },
    {
      image: "./home/balcony4.jpg",
      title: "Furnishings & Decor",
      subtitle: "BALCONY",
    },
    {
      image: "./home/dining2.jpg",
      title: "Furnishings & Decor",
      subtitle: "DINING",
    },

    {
      image: "./home/balcony3.jpg",
      title: "Furnishings & Decor",
      subtitle: "BALCONY",
    },

    {
      image: "./home/bathroom6.jpg",
      title: "Surfaces & Flooring",
      subtitle: "BATHROOM",
    },
    {
      image: "./home/office2.jpg",
      title: "Tech & Outdoors",
      subtitle: "OFFICE",
    },
    {
      image: "./home/bathroom3.jpg",
      title: "Surfaces & Flooring",
      subtitle: "BATHROOM",
    },

    {
      image: "./home/outdoor1.jpg",
      title: "Tech & Outdoors",
      subtitle: "OUTDOOR",
    },
    {
      image: "./home/wardobe4.jpg",
      title: "Storage Solutions",
      subtitle: "WADROBE",
    },
    {
      image: "./home/outdoor2.jpg",
      title: "Tech & Outdoors",
      subtitle: "OUTDOOR",
    },

    {
      image: "./home/wadrobe3.jpg",
      title: "Storage Solutions",
      subtitle: "WADROBE",
    },
    { image: "./home/sofa2.jpg", title: "Storage Solutions", subtitle: "SOFA" },
    { image: "./home/sofa4.jpg", title: "Storage Solutions", subtitle: "SOFA" },
    {
      image: "./home/bedroom11.jpg",
      title: "Storage Solutions",
      subtitle: "BEDROOM",
    },
    {
      image: "./home/outdoor3.jpg",
      title: "Tech & Outdoors",
      subtitle: "OUTDOOR",
    },
    // {
    //   image: "./home/bedroom11.jpg",
    //   title: "Storage Solutions",
    //   subtitle: "BEDROOM",
    // },
    {
      image: "./home/sofa9.jpg",
      title: "Storage Solutions",
      subtitle: "BEDROOM",
    },
  ];

  // Filter cards based on the selected category
  const filteredCards =
    selectedCategory === "ALL"
      ? cards
      : cards.filter((card) => card.title === selectedCategory);

  return (
    <section>
      <div className="hidden lg:block">
        <PageHomeBanner
          title="Portfolio Grid Masonry"
          subtitle="Home"
          buttonText=""
          backgroundImage="./banner/LuxuryLiving.jpg"
          onButtonClick={() => alert("Button Clicked!")}
        />
      </div>

      {/* Mobile or tablet screen banner */}
      <div className="block lg:hidden">
      <PageHomeBanner
          title=""
          subtitle=""
          buttonText=""
          backgroundImage="./banner/blog6.jpg"
          onButtonClick={() => alert("Button Clicked!")}
        />
      </div>

      <div className="main-container top-spacing bottom-spacing">
        <aside className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="text-[#104438] font-thin text-lg text-center uppercase">
              [ our portfolio ]
            </h3>
            <h1 className="text-[45px] w-full   lg:pl-20 text-center">
              Crafting Timeless Elegance in Every Detail
            </h1>
          </div>
          <div className="flex flex-wrap gap-6 justify-center pb-10">
            <button
              className={`button-style ${
                selectedCategory === "ALL" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("ALL")}
            >
              ALL
            </button>
            <button
              className={`button-style ${
                selectedCategory === "Furnishings & Decor" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Furnishings & Decor")}
            >
              Furnishings & Decor
            </button>
            <button
              className={`button-style ${
                selectedCategory === "Surfaces & Flooring" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Surfaces & Flooring")}
            >
              Surfaces & Flooring
            </button>
            <button
              className={`button-style ${
                selectedCategory === "Storage Solutions" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Storage Solutions")}
            >
              Storage Solutions
            </button>
            <button
              className={`button-style ${
                selectedCategory === "Tech & Outdoors" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Tech & Outdoors")}
            >
              Tech & Outdoors
            </button>
          </div>
        </aside>

        <aside>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredCards.map((card, index) => (
              <div key={index} className="w-full">
                <figure className="snip1584">
                  <img
                    loading="lazy"
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto"
                  />
                  <figcaption>
                    <h3>{card.title}</h3>
                    <h5>{card.subtitle}</h5>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AllProjects;
