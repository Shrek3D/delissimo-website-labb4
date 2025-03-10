// importera useState hook för hantering av states
import React, { useState } from "react";

const MenuFilter = ({ setSelectedPreferences }) => {
  // state för synlighet av dropdownmenyn med matpreferenser
  const [isVisible, setIsVisible] = useState(false);

  // funktion för att ändra synligheten av dropdownmenyn med matpreferenser
  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  // funktion för att hantera ändringar när klickrutor för matpreferenser klickas på
  const handlePreferenceChange = (event) => {
    const { value, checked } = event.target; // notera om klickruta klickats i eller avmarkerats

    // uppdatera arrayen selectedPreferences (state) med valda/borttagna matpreferenser
    setSelectedPreferences((prev) =>
      checked ? [...prev, value] : prev.filter((pref) => pref !== value)
    );
  };

  return (
    <div>
      {/* knapp för att toggla synlighet av dropdownmenyn för matpreferenser */}
      <button id="menu-preference-btn" type="button" onClick={toggleDropdown}>
        Matpreferenser
      </button>

      {/* container för dropdownmenyn med matpreferenser, visas om isVisible = true */}
      <div
        id="menu-food-preference-dropdown-container"
        // inline style för att hantera synligheten
        style={{ display: isVisible ? "block" : "none" }}
      >
        <div id="menu-food-preference-dropdown">
          <div className="menu-food-preference-group">
            <input
              type="checkbox"
              id="menu-dropdown-pesceterian"
              className="preference-checkbox"
              value="pesceterian"
              onChange={handlePreferenceChange}
            />
            <label
              htmlFor="menu-dropdown-pesceterian"
              id="menu-label-dropdown-pesceterian"
            >
              Pesceterian
            </label>
          </div>

          <div className="menu-food-preference-group">
            <input
              type="checkbox"
              id="menu-dropdown-vegetarian"
              className="preference-checkbox"
              value="vegetarian"
              onChange={handlePreferenceChange}
            />
            <label
              htmlFor="menu-dropdown-vegetarian"
              id="menu-label-dropdown-vegetarian"
            >
              Vegetarian
            </label>
          </div>

          <div className="menu-food-preference-group">
            <input
              type="checkbox"
              id="menu-dropdown-vegan"
              className="preference-checkbox"
              value="vegan"
              onChange={handlePreferenceChange}
            />
            <label htmlFor="menu-dropdown-vegan" id="menu-label-dropdown-vegan">
              Vegan
            </label>
          </div>

          <div className="menu-food-preference-group">
            <input
              type="checkbox"
              id="menu-dropdown-gluten-free"
              className="preference-checkbox"
              value="gluten-free"
              onChange={handlePreferenceChange}
            />
            <label
              htmlFor="menu-dropdown-gluten-free"
              id="menu-label-dropdown-gluten-free"
            >
              Glutenfri
            </label>
          </div>

          <div className="menu-food-preference-group">
            <input
              type="checkbox"
              id="menu-dropdown-lactose-free"
              className="preference-checkbox"
              value="lactose-free"
              onChange={handlePreferenceChange}
            />
            <label
              htmlFor="menu-dropdown-lactose-free"
              id="menu-label-dropdown-lactose-free"
            >
              Laktosfri
            </label>
          </div>

          <div className="menu-food-preference-group">
            <input
              type="checkbox"
              id="menu-dropdown-nut-free"
              className="preference-checkbox"
              value="nut-free"
              onChange={handlePreferenceChange}
            />
            <label
              htmlFor="menu-dropdown-nut-free"
              id="menu-label-dropdown-nut-free"
            >
              Nötfri
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuFilter;
