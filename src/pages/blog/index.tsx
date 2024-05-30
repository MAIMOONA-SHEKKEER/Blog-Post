import React, { Fragment } from "react";
import { Headline } from "@/styled-components/Typography";
import BlogComponent from "@/components/Blog";
import { CenteredContainer } from "@/styled-components/Box";

const BlogPage = () => {
  return (
    <CenteredContainer>
      <Headline>Blog</Headline>
      <br />
      <BlogComponent />
    </CenteredContainer>
  );
};

export default BlogPage;
