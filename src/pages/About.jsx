import about from "../assets/londoneye.jpg";
import { Banner } from "../components/Banner";
import bannerImage from "../assets/main-banner.jpg";



export const About = () => {
    return (
        <main>

            <Banner title="About Us" backgroundImage={bannerImage} />

            <section className="about__section">
                <div className="container about__inner">
                    {/* LEFT: image */}
                    <div className="about__media">
                        <img src={about} alt="About us" />
                        <span className="about__badge">Since 2016</span>
                    </div>

                    {/* RIGHT: content */}
                    <div className="about__content">
                        <p className="about__eyebrow">About us</p>
                        <h2 className="about__title">We plan trips that feel effortless</h2>
                        <p className="about__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
                            repellendus cumque maiores, curated experiences, and friendly
                            support from booking to boarding.
                        </p>

                        <div className="about__actions">
                            <button type="button" className="btn btn-primary">
                                Learn More
                            </button>
                            <a href="#contact" className="btn btn-secondary">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}


export default About;