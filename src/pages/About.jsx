import React from "react";
import aboutBackground from "../images/about-bakgrund.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header /> {/* Header Component */}
      {/* MAIN CONTENT: om oss, introtitel och -text, 3 knappar BESTÄLL, MENY och BOKA BORD, Bild längst ner */}
      <main className="about-container" style={{ backgroundColor: "#e0dece" }}>
        {/* about introtitel */}
        <h2 id="about-title">Om oss</h2>

        {/* about introtext */}
        <section className="about-content">
          <p id="about-text">
            På Delissimo är vi stolta över att skapa äkta italiensk mat,
            inspirerad av Italiens rika smaker och tillagad med de bästa
            ingredienserna. Oavsett om du längtar efter en perfekt bakad pizza,
            en smakrik pastarätt eller en härlig dessert, är varje tugga en
            hyllning till tradition och passion. Vi erbjuder en mysig atmosfär
            och personlig service – perfekt för familjemiddagar, romantiska
            kvällar eller trevliga stunder med vänner i Öjersjö, Partille och
            Gamlestaden. Buon appetito!
          </p>

          {/* about knappar */}
          <div className="about-buttons">
            <a
              href="#footer-restaurant-info"
              id="about-order"
              className="cta-button"
            >
              BESTÄLL
            </a>
            <a href="menu.html" id="about-menu" className="cta-button">
              MENY
            </a>
            <a href="booking.html" id="about-booking" className="cta-button">
              BOKA BORD
            </a>
          </div>
        </section>

        {/* about Bild 1 */}
        <section className="about-background">
          <div className="about-wrapper">
            <img src={aboutBackground} alt="Pizza on table" />
          </div>
        </section>
      </main>
      <Footer /> {/* importerad footerkomponent */}
    </div>
  );
}

export default About;
