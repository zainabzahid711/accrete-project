"use client";

import BlogWrapper from "../components/blogCardWrapper";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import bgImage from "@/public/homePage/heroBg.jpeg";

const BlogPage = () => {
  const headingRef = useAnimateOnScroll("animate-slide-up-fade");

  return (
    <>
      <section className="my-10">
        <div
          className="text-center justify-center flex items-center bg-cover bg-center "
          style={{ backgroundImage: `url(${bgImage.src})`, height: "250px" }}
        >
          <h3
            ref={headingRef}
            className="animate-slide-up-fade hover-border font-bold text-2xl md:text-5xl"
          >
            ACS BLOGS
          </h3>
        </div>
        <BlogWrapper />
      </section>
    </>
  );
};

export default BlogPage;
