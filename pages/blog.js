import React, { useState } from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { useAuth } from "../src/hooks/AuthContext";
import { getPosts } from "../src/config/firebase";
import {
  Wrapper,
  Post,
  Thumbnail,
  Content,
  PaginationContainer,
  AddPost,
  AddPostIcon,
} from "../styles/blogElements";

function BlogPost({ posts }) {
  const { currentUser } = useAuth();
  const [pageNumber, setPageNumber] = useState(0);

  // Failsafe. If posts don't get fetched immediately, we return null.
  if (!posts) {
    return null;
  }

  // Max allowed amount of posts per page.
  const postsPerPage = 12;
  const postsSeen = pageNumber * postsPerPage;

  // Displaying posts based on the page we're on.
  const displayPosts = posts
    .slice(postsSeen, postsSeen + postsPerPage)
    .map((post) => {
      return (
        <Post key={post.slug} posts={posts}>
          <a
            href={`/post/${post.slug}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Thumbnail>
              <Image
                alt={post.thumbnailAlt}
                src={post.thumbnail}
                height={600}
                width={800}
                quality={30}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={post.thumbnail}
                loading="eager"
                priority
              />
            </Thumbnail>
            <Content>{post.title}</Content>
          </a>
        </Post>
      );
    });

  // Amount of pages defined based on the length of the fetched document.
  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Wrapper posts={posts}>{displayPosts}</Wrapper>
      <PaginationContainer>
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagWrapper"}
          pageRangeDisplayed={10}
          pageClassName={"pagBtn"}
          previousClassName={"prevBtn"}
          nextClassName={"nextBtn"}
          disabledClassName={"pagDisabled"}
          activeClassName={"pagActive"}
        />
        {currentUser && (
          <AddPost href="/create">
            <AddPostIcon />
          </AddPost>
        )}
      </PaginationContainer>
    </>
  );
}

// Generate props at each user's request
export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default BlogPost;
