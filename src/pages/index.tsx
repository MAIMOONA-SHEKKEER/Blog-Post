import Footer from "@/components/Footer";
import { Fragment } from "react";
import BlogComponent from "./blog";
import WorksComponent from "./works";
import Introduction from "@/components/Introduction";
import BlogHome from "@/components/BlogHome";

const Home = () => {
  return (
    <Fragment>
      <Introduction/>
      <BlogHome/>
      <WorksComponent />
    </Fragment>
  );
};

export default Home;
