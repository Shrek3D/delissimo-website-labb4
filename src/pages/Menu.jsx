import React, { useState } from "react"; // importera useState hook för hantering av states
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuItems from "../components/MenuItems";
import MenuFilter from "../components/MenuFilter";

function Menu() {
  // använder states för att hålla reda på valda matpreferenser för matpreferensfunktionaliteten.
  // ursprungligen satt till en tom array
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  return (
    <div>
      <Header /> {/* importerad headerkomponent */}
      <main className="menu-container">
        <h2 id="menu-title">Vår Meny</h2>

        {/* komponent för dom iklickade matpreferenserna, uppdaterar
        arrayen selectedPreferences när rutor klickas på*/}
        <MenuFilter setSelectedPreferences={setSelectedPreferences} />

        {/* komponent för att visa menyartiklar. använder arrayen selectedPreferences
            för att avgöra vilka rätter som ska visas/döljas*/}
        <MenuItems selectedPreferences={selectedPreferences} />
      </main>
      <Footer /> {/* importerad footerkomponent */}
    </div>
  );
}

export default Menu;
