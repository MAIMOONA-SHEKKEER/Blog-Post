import React, { Fragment, useEffect, useState } from "react";
import { Blog } from "@/models/blog";
import {  StyledDiv } from "@/styled-components/Box";
import {
  DateSpan,
  GreyOutSpan,
  StyledPara,
  Title
} from "@/styled-components/Typography";
import SearchBox from "./SearchBox";

export const BlogComponent = () => {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const res = await fetch("/data/blogPost.json");
      const data: Blog[] = await res.json();
      setBlogPosts(data);
    };

    fetchBlogPosts().catch(console.error);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const filteredBlogPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Fragment>
      <SearchBox setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      {filteredBlogPosts.map((post) => (
        <StyledDiv key={post.id}>
          <Title>{post.title}</Title><br/>
          <DateSpan>{formatDate(post.date)}</DateSpan> |
          <GreyOutSpan>{post.author}</GreyOutSpan>
          <StyledPara>{post.description}</StyledPara>
        </StyledDiv>
      ))}
    </Fragment>
  );
};

export default BlogComponent;
