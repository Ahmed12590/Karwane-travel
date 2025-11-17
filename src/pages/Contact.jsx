import ContactForm from "../components/ContactForm";
import { Banner } from "../components/Banner";
import bannerImage from "../assets/main-banner.jpg";

export const Contact = () => {
    return (
        <main>
            <Banner title="Contact Us " backgroundImage={bannerImage} />
            <ContactForm />


            {/* Google Map Added Below */}
            <div className="map-container">
                <iframe
                    title="water-pump-karachi"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.872919579584!2d67.0855008751867!3d24.867654583011843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f178ea79e1b%3A0x4c981d8f6c47f12c!2sWater%20Pump%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0, marginTop: "20px", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </main>
    )
}


export default Contact;