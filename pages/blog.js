import React from "react";
import Image from "next/image";
import useFirestore from "../src/hooks/useFirestore";

const HomePage = () => {
  const { docs } = useFirestore("posts");

  return (
    <div>
      <h1>Blog Posts</h1>
      {docs.map((post) => (
        <article key={post.slug}>
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            width={1000}
            height={500}
            quality={50}
            loading="eager"
            // blurDataURL={post.coverImage}
            // placeholder="blur"
          />
          <div>
            <h2>{post.title}</h2>
            {/* <span>{post.createdAt.toDate().toDateString()}</span> */}
            <p
              dangerouslySetInnerHTML={{
                __html: `${post.content.substring(0, 200)}...`,
              }}
            ></p>
            <a href={`/post/${post.slug}`}>Continue reading</a>
            <a href={`/edit/${post.slug}`}>Edit me</a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default HomePage;
