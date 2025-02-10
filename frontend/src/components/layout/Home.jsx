import Hero from "../../pages/Hero";
import OurServices from "../../pages/OurServices";
import HappyClientServicesCount from "../../pages/HappyClientServicesCount";
import ImageSlider from "../../pages/ImageSlider";
// import Post from "../../pages/Post";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <OurServices />
      <HappyClientServicesCount />
      <ImageSlider />

      {/* <Post /> */}
    </div>
  );
};

export default Home;
