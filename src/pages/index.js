import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Intro from "../components/Intro/Intro";
import Photo from "../components/Photo/Photo";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Welcome from "../components/Welcome/Welcome";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <>
      <Welcome />
      <Layout>
        <Section grid full>
          <Intro />
          <Photo />
          {/* <BgAnimation /> */}
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
