import HeroBanner from "../components/HeroBanner";
import Images from "../constants";

export default function About() {
  return (
    <div>
      <HeroBanner>
        <img src={Images.shop} alt="hero" width="100%" />
      </HeroBanner>
      <h1 className="section-title">About</h1>
    </div>
  );
}
