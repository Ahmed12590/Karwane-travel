import Carousel from "../components/slider";
import CountUp from "../components/CountUp";
import cameraIcon from "../assets/icon-camera.png";
import travelicon from "../assets/icon-1.png";
import backpartner from "../assets/partners-bg.png";
import partnerlogo from "../assets/partner-logo.png";
import travelback from "../assets/travel-bg.png";
import about from "../assets/londoneye.jpg";

const partners = [
  partnerlogo,
  partnerlogo,
  partnerlogo,
  partnerlogo,
  partnerlogo,
];

const categories = [
  { title: "City Tours", count: "10 Tours+" },
  { title: "Beaches", count: "10 Tours+" },
  { title: "Boat Tours", count: "10 Tours+" },
  { title: "Adventure", count: "10 Tours+" },
  { title: "Food", count: "10 Tours+" },
  { title: "hiking", count: "10 Tours+" },
];

const features = [
  { title: "Wildlife Tours" },
  { title: "Paragliding Tours" },
  { title: "Adventure Tours" },
  { title: "Beaches Tours" },
];

export default function Home() {
  return (
    <main>
      <Carousel />

      <section className="category-section">
        <div className="container">
          <div className="category-header">
            <div className="category__shap-icon" aria-hidden="true">
              <img src={cameraIcon} alt="" />
            </div>

            <h4 className="section__sub-title">Browse By Category</h4>
            <h3 className="section-heading">Pick A Tour Type</h3>
          </div>

          <div className="category-grid">
            {categories.map((c) => (
              <div className="category-card" key={c.title}>
                <div className="category-icon">
                  <img src={travelicon} alt="" />
                </div>
                <h5 className="category-title">{c.title}</h5>
                <p className="category-meta">{c.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



<section className="about__section">
  <div className="container about__inner">
    {/* LEFT: image */}
    <div className="about__media">
      <img src={about} alt="About us" />
      <span className="about__badge">Since 2015</span>
    </div>

    {/* RIGHT: content */}
    <div className="about__content">
      <p className="about__eyebrow">About us</p>
      <h2 className="about__title">
        We plan trips that feel effortless
      </h2>
      <p className="about__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
        repellendus cumque maiores, curated experiences, and friendly support
        from booking to boarding.
      </p>

      <div className="about__actions">
        <button type="button" className="btn btn-primary">Learn More</button>
        <a href="#contact" className="btn btn-secondary">Contact Us</a>
      </div>
    </div>
  </div>
</section>






      <section
        className="Travel-section"
        style={{ backgroundImage: `url(${travelback})` }}
      >
        <div className="travel__second-sec">
          {/* LEFT */}
          <div className="travel-heading">
            <p className="eyebrow">Are you ready to travel?</p>
            <h2 className="hero-title">
              Tevily is a World Leading Online
              <br /> Tour Booking Platform
            </h2>
            <button className="btn btn-outline">Contact Us</button>
          </div>

          {/* RIGHT */}
          <div className="travel__four-box">
            <div className="feature-grid">
              {features.map((f) => (
                <div className="feature-card" key={f.title}>
                  <div className="category-icon">
                    <img src={travelicon} alt="" />
                  </div>
                  <h5>{f.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="partners__section"
        style={{ backgroundImage: `url(${backpartner})` }}
      >
        <div className="partners__inner">
          <h4 className="partners__title">Our trusted partners</h4>

          <div className="partner-images">
            {partners.map((logo, i) => (
              <img
                className="partner-logo"
                src={logo}
                alt={`Partner ${i + 1}`}
                key={i}
              />
            ))}
          </div>
        </div>
      </section>

<section className="stats-section">
  <div className="container">
    <div className="stats">
      <div className="stat">
        <CountUp end={120} duration={1600} suffix="+" className="stat__number" />
        <span className="stat__label">Total Destination</span>
      </div>

      <div className="stat">
        <CountUp end={500} duration={1600} suffix="+" className="stat__number" />
        <span className="stat__label">Travel Packages</span>
      </div>

      <div className="stat">
        <CountUp end={12} duration={1600} suffix="k+" className="stat__number" />
        <span className="stat__label">Total Travelers</span>
      </div>

      <div className="stat">
        <CountUp end={7} duration={1600} suffix="k+" className="stat__number" />
        <span className="stat__label">Positive Reviews</span>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
