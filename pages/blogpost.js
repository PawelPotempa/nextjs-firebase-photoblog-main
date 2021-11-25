import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
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
} from "../styles/blogpostElements";
import axios from "axios";
import { Link } from "react-router-dom";

function BlogPost() {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, []);

  const postsPerPage = 12;
  const postsSeen = pageNumber * postsPerPage;

  const displayPosts = posts
    .slice(postsSeen, postsSeen + postsPerPage)
    .map((post) => {
      return (
        <Post posts={posts}>
          <Delete />
          <Edit />

          <Thumbnail src={post.image} />
          <Link
            to={`/post/${post._id}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Content>{post.desc}</Content>
          </Link>
        </Post>
      );
    });

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Main>
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
      </PaginationContainer>
      <AddPost to="/">
        <AddPostIcon />
      </AddPost>
    </Main>
  );
}

export default BlogPost;
