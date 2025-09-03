import umrah from "../assets/umrah-packages.jpg";
import bedIcon from "../assets/service bad.webp";
import transportIcon from "../assets/transport.webp";
import visaIcon from "../assets/visa.webp";
import flightIcon from "../assets/flight.webp";

const services = [
  {
    icon: bedIcon,
    title: "Hotels",
    text: "Get economy as well as star hotels including VIP/Luxury hotels at the best prices in the market.",
  },
  {
    icon: transportIcon ,
    title: "Transport",
    text: "Vastest option of transport and transfer for the whole Umrah journey with extensive fleet.",
  },
  {
    icon: visaIcon,
    title: "Umrah Visa",
    text: "Fastest visa processing via the well-reputed Shirka/Sponsor with best approvals and service.",
  },
  {
    icon: flightIcon,
    title: "Flight Tickets",
    text: "Best airfares & routing options from multiple airlines with reliable schedules.",
  },
];
const Umrah = () => {
  return (
    <main>
      <section className="umrah">
        <div className="container umrah__inner">
          <div className="umrah__content">
            <h2 className="umrah__title">Umrah Packages Price in Pakistan</h2>

            <p>
              Getting the best Umrah packages from Pakistan has never been
              easier. Just provide a little detail about your plan and get a
              customized quote for your Umrah package within minutes.
            </p>
            <p>
              With our dependable advisory and support we have already served
              thousands of Umrah pilgrims from Pakistan and abroad.
            </p>
            <p>
              Call/WhatsApp at <strong>+92-3111-223-555</strong> right now to
              start your Umrah planning:
            </p>
          </div>

          <figure className="umrah__media">
            <img
              src={umrah}
              alt="Masjid al-Haram – Umrah"
              loading="eager"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="umrah__wrapper">
        <div className="container">
          <h2 className="umrah__heading">More Umrah services for you</h2>
          <p className="umrah__lead">
            We take pride in being a leader of the Umrah services to our B2B and
            B2C clients in Pakistan. You can either buy a full package from us
            or get any partial services as per your requirement.
          </p>

          <div className="umrah-services">
            {services.map((s) => (
              <article className="service" key={s.title}>
                <div className="service__icon">
                  <img
                    src={s.icon}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h4 className="service__title">{s.title}</h4>
                <p className="service__text">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Umrah;
