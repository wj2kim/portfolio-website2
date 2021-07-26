import Blogs from "../components/Blogs/Blogs";
import Intro from "../components/Intro/Intro";
import Photo from "../components/Photo/Photo";
import MyWords from "../components/MyWords/MyWords";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Welcome from "../components/Welcome/Welcome";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import ScrollArrow from "../components/ScrollArrow/ScrollArrow";

const Home: React.FC = () => {
  return (
    <>
      <Welcome />
      <Layout>
        <ScrollArrow />
        <Section grid full>
          <Intro />
          <Photo />
          <MyWords />
        </Section>
        <Projects />
        <Skills />
        <Blogs />
      </Layout>
    </>
  );
};

export default Home;
