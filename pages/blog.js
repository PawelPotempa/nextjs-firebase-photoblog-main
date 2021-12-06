import React, { useState } from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import useFirestore from "../src/hooks/useFirestore";
import { useAuth } from "../src/hooks/AuthContext";
import {
  Main,
  Wrapper,
  Post,
  Delete,
  Edit,
  Thumbnail,
  Content,
  PaginationContainer,
  AddPost,
  AddPostIcon,
} from "../styles/blogElements";

function BlogPost() {
  const { currentUser } = useAuth();
  const [pageNumber, setPageNumber] = useState(0);

  // Fetch document data from Firestore.
  const { docs } = useFirestore("posts");

  // Max allowed amount of posts per page.
  const postsPerPage = 12;
  const postsSeen = pageNumber * postsPerPage;

  // Displaying posts based on the page we're on.
  const displayPosts = docs
    .slice(postsSeen, postsSeen + postsPerPage)
    .map((post) => {
      return (
        <Post key={post.slug} posts={docs}>
          <a
            href={`/post/${post.slug}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Thumbnail alt={post.coverImageAlt} src={post.coverImage} />
            <Content>{post.content}</Content>
          </a>
        </Post>
      );
    });

  // Amount of pages defined based on the length of the fetched document.
  const pageCount = Math.ceil(docs.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Main>
      <Wrapper posts={docs}>{displayPosts}</Wrapper>
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
      </PaginationContainer>
      {currentUser && (
        <AddPost href="/create">
          <AddPostIcon />
        </AddPost>
      )}
    </Main>
  );
}

export default BlogPost;
