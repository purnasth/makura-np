import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgAutoplay from "lightgallery/plugins/autoplay";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";

import product1 from "../assets/products/1.jpg";
import product2 from "../assets/products/2.jpg";
import product3 from "../assets/products/3.jpg";

interface Item {
  id: number;
  category: string;
  image: string;
  title: string;
}

const items: Item[] = [
  {
    id: 1,
    category: "watch",
    image: product1,
    title: "Watch",
  },
  {
    id: 2,
    category: "fashion",
    image: product3,
    title: "Fashion",
  },
  {
    id: 3,
    category: "fashion",
    image: product3,
    title: "Hoodie",
  },
  {
    id: 4,
    category: "fashion",
    image: product3,
    title: "Shoes",
  },
  {
    id: 5,
    category: "watch",
    image: product2,
    title: "Watch",
  },
  {
    id: 6,
    category: "watch",
    image: product1,
    title: "Watch",
  },
  {
    id: 7,
    category: "watch",
    image: product2,
    title: "Watch",
  },
  {
    id: 8,
    category: "fashion",
    image: product3,
    title: "Fashion",
  },
  {
    id: 9,
    category: "watch",
    image: product1,
    title: "Watch",
  },
  {
    id: 10,
    category: "watch",
    image: product2,
    title: "Watch",
  },
  {
    id: 11,
    category: "watch",
    image: product1,
    title: "Watch",
  },
  {
    id: 12,
    category: "watch",
    image: product2,
    title: "Watch",
  },
  {
    id: 13,
    category: "watch",
    image: product1,
    title: "Watch",
  },
  {
    id: 14,
    category: "watch",
    image: product2,
    title: "Watch",
  },
  {
    id: 15,
    category: "watch",
    image: product1,
    title: "Watch",
  },
  {
    id: 16,
    category: "watch",
    image: product2,
    title: "Watch",
  },
  {
    id: 17,
    category: "watch",
    image: product1,
    title: "Watch",
  },
  {
    id: 18,
    category: "watch",
    image: product2,
    title: "Watch",
  },
  {
    id: 19,
    category: "watch",
    image: product1,
    title: "Watch",
  },
  {
    id: 20,
    category: "watch",
    image: product2,
    title: "Watch",
  },
];

const getUniqueCategories = (items: Item[]): string[] => {
  const categories = items.reduce((acc, item) => {
    if (item.category) {
      item.category.split(" ").forEach((cat) => acc.add(cat));
    }
    return acc;
  }, new Set<string>());
  return ["all", ...categories];
};

const Gallery: React.FC = () => {
  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState<string>("all");
  const uniqueCategories = getUniqueCategories(items);

  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });

    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      if (filterKey === "all") {
        isotope.current.arrange({ filter: "*" });
      } else {
        isotope.current.arrange({ filter: `.${filterKey}` });
      }
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);

    // Calculate the total height of the header and sticky nav
    const headerHeight = 64; // Adjust based on your actual header height
    const stickyNavHeight = 64; // Adjust based on your sticky nav height
    const offset = headerHeight + stickyNavHeight;

    setTimeout(() => {
      const galleryContainer = document.getElementById("galleryDisplay");
      if (galleryContainer) {
        const topPosition =
          galleryContainer.getBoundingClientRect().top +
          window.scrollY -
          offset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <main className="px-0">
      <ul className="sticky top-16 z-50 flex items-center justify-center gap-3 py-4 mb-12 flex-wrap bg-light">
        {uniqueCategories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer capitalize text-center font-luxury px-5 py-1 rounded-full hover-outline transition-all duration-300 ${
              filterKey === category ? "bg-gradient font-bold" : "text-gradient"
            }`}
            onClick={handleFilterKeyChange(category)}
          >
            {category === "all" ? "All" : category}
          </li>
        ))}
      </ul>

      <section id="galleryDisplay" className="scroll-pt-32">
        <LightGallery
          plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen, lgAutoplay]}
          mode="lg-fade"
          elementClassNames="filter-container flex flex-wrap"
          thumbnail={true}
          autoplay={true}
          allowMediaOverlap={true}
          toggleThumb={true}
        >
          {items.map((item) => (
            <div
              key={item.id}
              data-src={item.image}
              className={`filter-item group ${
                item.category ? item.category : "no-category"
              } flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 overflow-hidden cursor-pointer outline outline-8 outline-light my-1`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="size-full object-cover transition-all duration-300 ease-linear group-hover:scale-105"
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </LightGallery>
      </section>
    </main>
  );
};

export default Gallery;
