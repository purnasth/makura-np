import React, { useEffect } from "react";

const instagramPosts = [
  "https://www.instagram.com/p/CqiCNmkJ2mc/?utm_source=ig_embed&amp;utm_campaign=loadingd",
  "https://www.instagram.com/p/CaZgesIIIZs/?utm_source=ig_embed&amp;utm_campaign=loading",
  "https://www.instagram.com/p/C9zojtHyvmQ/?utm_source=ig_embed&amp;utm_campaign=loading",
  "https://www.instagram.com/p/Cs_VnfNyVC3/?utm_source=ig_embed&amp;utm_campaign=loading",
  "https://www.instagram.com/reel/C1a6hU2P_Y1/?utm_source=ig_embed&amp;utm_campaign=loading",
  "https://www.instagram.com/reel/CozJr8jqHX1/?utm_source=ig_embed&utm_campaign=loading",
  "https://www.instagram.com/p/CyivN5pCo9R/?hl=en",
  "https://instagram.com/p/CqiD_fPJ8bo/?hl=en&img_index=1",
  "https://www.instagram.com/p/Co9tvBpoDAC/?hl=en",
  "https://www.instagram.com/p/CmF5scOJTTD/?hl=en&img_index=1",
  "https://www.instagram.com/p/Cim6b6kpmpF/?hl=en&img_index=1",
  "https://www.instagram.com/p/CWafXkysfeU/?hl=en&img_index=1",
  "https://www.instagram.com/p/CWc3rStP-uO/?hl=en",
];

const InstagramWall: React.FC = () => {

  useEffect(() => {
    // Load Instagram embed script once
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <main className="bg-light text-dark">
      <div className="flex items-center justify-center gap-4 flex-col max-w-xl mx-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl leading-snug lg:leading-snug uppercase">
          Instagram Wall
        </h3>
        <p className="text-sm text-center text-dark/60">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum
          itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus
          vero. Similique magni nihil, quia provident soluta illo harum
          cupiditate, excepturi totam nobis sunt assumenda. Velit!
        </p>
      </div>
      <div className="scroll mt-12 md:mt-20 flex gap-6 text-light max-w-full overflow-x-auto">
        {instagramPosts.map((postUrl, index) => (
          <div key={index} className="mb-10">
            {/* mb is for scrollbar */}
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={postUrl}
              data-instgrm-version="14"
            >
              <a href={postUrl} target="_blank" rel="noopener noreferrer">
                View this post on Instagram
              </a>
            </blockquote>
          </div>
        ))}
      </div>

      {/* <div className="group flex items-center justify-end flex-col text-dark pb-12 2xl:pb-12 space-y-6 -z-10 transition-all duration-500">
        <div className="w-px h-28 group-hover:h-16 bg-dark/50 bottom-0 transition-all duration-500"></div>
        <button className="group relative transition-all duration-500 hover:scale-110 font-semibold">
          <span className="absolute -bottom-px -right-0 w-full h-px bg-dark/60 scale-x-100 group-hover:scale-x-0 origin-center transition-all duration-300 ease-linear"></span>
          View more on Instagram
        </button>
      </div> */}
      <div className="mt-0 md:mt-10 flex items-center justify-center">
        <button className="group relative transition-all duration-500 hover:scale-110 font-semibold text-center">
          <span className="absolute -bottom-px -right-0 w-full h-px bg-dark/60 scale-x-100 group-hover:scale-x-0 origin-center transition-all duration-300 ease-linear"></span>
          View more on Instagram
        </button>
      </div>
    </main>
  );
};

export default InstagramWall;
