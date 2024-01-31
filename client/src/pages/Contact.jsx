import HeroBanner from "../components/HeroBanner";
import Images from "../constants";

export default function Contact() {
  return (
    <div>
      <HeroBanner>
        <img src={Images.table} alt="hero" width="100%" />
      </HeroBanner>
      <h1 className="section-title">Contact</h1>
    </div>
  );
}
