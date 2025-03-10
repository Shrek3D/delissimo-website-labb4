import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Job() {
  return (
    <div>
      <Header /> {/* importerad headerkomponent */}
      {/* MAIN CONTENT: job, introtitel, lediga tjänster, ansökningsformulär för lediga tjänster */}
      <main className="job-container">
        {/* job introtitel */}
        <h2 id="job-title">Jobb</h2>

        {/* Lediga tjänster block */}
        <section className="job-openings">
          <h2 id="job-openings-title">LEDIGA TJÄNSTER</h2>
          <div id="job-listings">{/* Lediga tjänster läggs till här */}</div>
        </section>

        {/* job ansökningsformulär */}
        <form
          id="job-form"
          action="https://formspree.io/f/xpwqjezd"
          method="POST"
          encType="multipart/form-data"
          noValidate
        >
          {/* autocomplete för autofill i webbläsaren */}
          <label htmlFor="job-name" id="job-label-name">
            Namn:
          </label>
          <input
            type="text"
            id="job-name"
            name="name"
            autoComplete="name"
            required
          />

          <span
            className="error-message"
            id="error-job-name"
            aria-live="polite"
          ></span>

          {/* autocomplete för autofill i webbläsaren */}
          <label htmlFor="job-email" id="job-label-email">
            E-post:
          </label>
          <input
            type="email"
            id="job-email"
            name="email"
            autoComplete="email"
            required
          />

          <span
            className="error-message"
            id="error-job-email"
            aria-live="polite"
          ></span>

          {/* Telefonnummer fält med pattern för att begränsa format */}
          <label htmlFor="job-phone" id="job-label-phone">
            Telefonnummer:
          </label>
          <input
            type="tel"
            id="job-phone"
            name="phone"
            autoComplete="tel"
            pattern="^[0-9+\s-]{8,15}$"
            required
          />

          <span
            className="error-message"
            id="error-job-phone"
            aria-live="polite"
          ></span>

          {/* Textarea för meddelande */}
          <label htmlFor="job-message" id="job-label-message">
            Meddelande:
          </label>
          <textarea id="job-message" name="message" rows="3"></textarea>

          {/* Filuppladdning för CV */}
          <label htmlFor="job-file" id="job-label-file">
            Ladda upp CV:
          </label>
          <input
            type="file"
            id="job-file"
            name="file"
            accept=".pdf,.doc,.docx"
            required
          />

          <span
            className="error-message"
            id="error-job-file"
            aria-live="polite"
          ></span>

          {/* GDPR klickruta */}
          <div className="gdpr-consent">
            <input type="checkbox" id="job-gdpr" name="job-gdpr" required />
            <label
              htmlFor="job-gdpr"
              id="job-label-gdpr"
              className="gdpr-label"
            >
              Jag samtycker till att mina personuppgifter behandlas enligt
              integritetspolicyn.
            </label>
          </div>

          <span
            className="error-message"
            id="error-job-gdpr"
            aria-live="polite"
          ></span>

          {/* Submit-knapp */}
          <button
            type="submit"
            id="job-submit"
            aria-label="Skicka in din jobbansökan"
          >
            Skicka
          </button>

          {/* Dolt bekräftelsemeddelande, görs synligt med JavaScript efter lyckad submission */}
          <p id="success-message" style={{ display: "none", color: "#6a3326" }}>
            Tack! Din jobbansökan har skickats.
          </p>
        </form>
      </main>
      <Footer /> {/* importerad footerkomponent */}
    </div>
  );
}

export default Job;
