import React from "react";
import {
  Hero,
  Features,
  Seo,
  Team,
  Tutorials,
  Project,
  Faq,
  Footer,
  Navbar,
} from "../../components";
const Home = () => {
  return (
    <>
      <div className="main">
        <Navbar />

        <Hero />
        <Features />
        <Seo />
        <Team />
        <Tutorials />
        <Project />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default Home;
