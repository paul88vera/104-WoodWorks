export default function Contact() {
  return (
    <div className="contact">
      <div className="contrast-section" style={{ paddingTop: 0 }}>
        <div className="contact-section">
          <div className="contact-blurb">
            <h1 className="section-title contact-header">
              Questions? Need A Quote?
            </h1>
          </div>
          <form className="contact-form">
            <p>
              Fill out the form to contact our support team directly. We will
              get back to you as soon as we are able.
            </p>
            <br />
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
              />
            </label>
            <label htmlFor="phone">
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Phone Number"
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </label>
            <label htmlFor="message">
              <textarea
                name="message"
                id="message"
                placeholder="How can we help you today?"></textarea>
            </label>
            <button className="btn submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
