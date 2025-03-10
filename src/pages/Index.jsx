import React from "react";
import logo from "../images/logo2-removebg-preview.png";
import homepageBackground from "../images/homepage-bakgrund.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Index() {
  return (
    <div>
      <Header /> {/* importerad headercomponent */}
      {/* MAIN CONTENT: homepage, introtitel och -text, 3 knappar för BESTÄLL, MENY och BOKA BORD, logotyp, stor bild längst ner */}
      <main>
        <section className="homepage-container">
          {/* homepage introtitel och -text */}
          <section className="homepage-intro">
            <h2 id="homepage-intro-title">ITALIENSKINFLUERAD PÄRLA</h2>
            <p id="homepage-intro-text">
              Välkomna in på en avkopplande kaffestund med lyxig espresso, ett
              glas öl eller vin eller mätta era magar med äkta Italiensk
              surdegspizza á la romana, lasagne, pasta eller färska sallader.
              Här finns något för alla!
            </p>
          </section>

          <div className="homepage-content">
            {/* homepage knappar */}
            <div className="homepage-buttons">
              <a
                href="#footer-restaurant-info"
                id="homepage-order"
                className="cta-button"
              >
                BESTÄLL
              </a>
              {/* Skrolla ner till Footer när man trycker på "BESTÄLL" på homepage */}
              <a href="/menu" id="homepage-menu" className="cta-button">
                MENY
              </a>
              <a href="/booking" id="homepage-booking" className="cta-button">
                BOKA BORD
              </a>
            </div>

            {/* homepage Bild 1 */}
            <div className="homepage-logo">
              <img src={logo} alt="Logotype" />
            </div>
          </div>
        </section>

        {/* homepage Bild 2 */}
        <section className="homepage-background">
          <div className="background-wrapper">
            {/* Fick ej bilden att fungera utan detta, förstörde hela gränssnittet */}
            <img src={homepageBackground} alt="Restaurant Table" />
          </div>
        </section>
      </main>
      <Footer /> {/* importerad footerkomponent */}
    </div>
  );
}

export default Index;
