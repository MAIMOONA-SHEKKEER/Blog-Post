import React from "react";
import BlogComponent from "./Blog";
import { CenteredContainer, HomeBlogDiv } from "@/styled-components/Box";

const BlogHome = () => {
  return (
    <CenteredContainer>
    <HomeBlogDiv>
      <h1>Recent Posts</h1>
      <BlogComponent />
    </HomeBlogDiv></CenteredContainer>
  );
};

export default BlogHome;
