import React, { useEffect } from "react";

const InstagramWall: React.FC = () => {
  const instagramPosts = [
    "https://www.instagram.com/reel/CozJr8jqHX1/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/p/CozJr8jqHX1/?utm_source=ig_embed",
    "https://www.instagram.com/reel/CozJr8jqHX1/?utm_source=ig_embed",
    "https://www.instagram.com/reel/CozJr8jqHX1/?utm_source=ig_embed",
  ];

  useEffect(() => {
    // Load Instagram embed script once
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <main className="bg-dark text-light pb-0">
      <div className="flex items-center justify-center gap-4 flex-col max-w-xl mx-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl leading-snug lg:leading-snug uppercase">
          Instagram Wall
        </h3>
        <p className="text-sm text-center text-light/60">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum
          itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus
          vero. Similique magni nihil, quia provident soluta illo harum
          cupiditate, excepturi totam nobis sunt assumenda. Velit!
        </p>
      </div>
      <div className="mt-12 flex items-center justify-between text-light">
        {instagramPosts.map((postUrl, index) => (
          <div key={index} className="">
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
    </main>
  );
};

export default InstagramWall;
