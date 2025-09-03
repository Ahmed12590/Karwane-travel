import umrah from "../assets/umrah-packages.jpg";

const Umrah = () => {
  return (
    <main>

      <section className="umrah">
  <div className="container umrah__inner">
    <div className="umrah__content">
      <h2 className="umrah__title">Umrah Packages Price in Pakistan</h2>

      <p>
        Getting the best Umrah packages from Pakistan has never been easier. Just
        provide a little detail about your plan and get a customized quote for your
        Umrah package within minutes.
      </p>
      <p>
        With our dependable advisory and support we have already served thousands of
        Umrah pilgrims from Pakistan and abroad.
      </p>
      <p>
        Call/WhatsApp at <strong>+92-3111-223-555</strong> right now to start your
        Umrah planning:
      </p>
    </div>

    <figure className="umrah__media">
      <img src={umrah} alt="Masjid al-Haram – Umrah" loading="eager" decoding="async" />
    </figure>
  </div>
</section>



    </main>
  );
};

export default Umrah;
