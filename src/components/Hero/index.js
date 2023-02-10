import hero from "../../images/hero.jpg";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="para-left">
          <img className="hero-img" src={hero} alt="by Anna Shvets" width="100%" />
        </div>
        <div className="img-right">
          <span>Customize Your Build</span>
          <br />
          <br />
          <p>
            In this confusing world of Contractors and Home Remodelers, You need
            a reliable General Contractor that you can trust and believe in. The
            Texans won't waste hours of your time, we will work with you to
            develop a plan and design that will work within your budget. If we
            can't, we will at least point you in the right direction. And, at
            the end of your project, you will still be able to send your kids to
            college!
          </p>
          <br />
          <br />
          <div className="cta-container">
            <button className="btn btn-blue first-btn">Get a free quote</button>
            <p>
              <strong>Limited Time Offer!</strong>
            </p>
          </div>
        </div>
        <br />
        <img
          src="https://unsplash.it/1500/350/"
          width="100%"
          alt="featured build"
          className="hero-banner-img"
        />
      </div>
    </>
  );
}
