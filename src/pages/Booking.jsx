import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Booking() {
  return (
    <div>
      <Header /> {/* importerad headercomponent */}
      {/* MAIN CONTENT: booking, introtitel och -text, formulär för att boka bord */}
      <main className="booking-container">
        {/* booking introtitel och -text */}
        <h2 id="booking-title">Boka Bord</h2>
        <p id="booking-text">
          Vill du boka bord? Fyll i uppgifterna i formuläret.
        </p>

        {/* booking formulär */}
        {/* novalidate för att stänga av webbläsarens egna validering, gör egen i JavaScript */}
        <form
          id="booking-form"
          action="https://formspree.io/f/xgvolbea"
          method="POST"
          noValidate
        >
          {/* autocomplete för autofill i webbläsaren */}
          <label htmlFor="booking-name" id="booking-label-name">
            Namn:
          </label>
          <input
            type="text"
            id="booking-name"
            name="name"
            autoComplete="name"
            required
          />

          {/* Börja med tom <span>. Lägger till error meddelande med JavaScript om validering misslyckas.
              aria-live för realtids errormeddelande för dom med skärmläsare */}
          <span
            className="error-message"
            id="error-name"
            aria-live="polite"
          ></span>

          {/* autocomplete för autofill i webbläsaren */}
          <label htmlFor="booking-email" id="booking-label-email">
            E-post:
          </label>
          <input
            type="email"
            id="booking-email"
            name="email"
            autoComplete="email"
            required
          />

          <span
            className="error-message"
            id="error-email"
            aria-live="polite"
          ></span>

          {/* Telefonnummer fält med pattern för att begränsa format */}
          <label htmlFor="booking-phone" id="booking-label-phone">
            Telefonnummer:
          </label>
          <input
            type="tel"
            id="booking-phone"
            name="phone"
            autoComplete="tel"
            pattern="^[0-9+\s-]{8,15}$"
            required
          />

          <span
            className="error-message"
            id="error-phone"
            aria-live="polite"
          ></span>

          {/* Textarea för eventuella önskemål */}
          <label htmlFor="requests" id="booking-label-requests">
            Eventuella önskemål:
          </label>
          <textarea id="requests" name="booking-requests" rows="3"></textarea>

          {/* Submit-knapp */}
          <button
            type="submit"
            id="booking-submit"
            aria-label="Skicka in din bokning"
          >
            Skicka
          </button>

          {/* Dolt bekräftelsemeddelande, görs synligt med JavaScript efter lyckad submission */}
          <p id="success-message" style={{ display: "none", color: "#6a3326" }}>
            Tack! Din bokning har skickats.
          </p>
        </form>
      </main>
      <Footer /> {/* importerad footerkomponent */}
    </div>
  );
}

export default Booking;
