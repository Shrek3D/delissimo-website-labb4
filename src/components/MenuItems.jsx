import React from "react";

const MenuItems = ({ selectedPreferences }) => {
  // försökt efterlikna strukturen i labb 3. delat upp menyn i sektioner
  // (ANTIPASTI, INSALATA etc.) och satt detta som titel, sedan intro/outro
  // för extratexten och slutligen en lista men menyartiklarna
  const menuSections = [
    {
      title: "ANTIPASTI",
      items: [
        {
          id: "vitloksbrod",
          name: "Vitlöksbröd",
          description: "Frasigt bröd med vitlök, parmesan & oregano",
          price: "79 kr",
          category: ["vegetarian", "pesceterian", "nut-free"],
        },
        {
          id: "charkbricka",
          name: "Charkbricka",
          description:
            "Italiensk chark såsom salami, prosciutto & bresaola, ruccola & antipasti mix av grönsaker",
          price: "199 kr",
          category: ["gluten-free", "lactose-free", "nut-free"],
        },
        {
          id: "burrata",
          name: "Burrata",
          description:
            "Krämig burrata, körsbärstomater, basilika, ruccola, basilikapesto & balsamico",
          price: "139 kr",
          category: ["pesceterian", "vegetarian", "gluten-free"],
        },
        {
          id: "carpaccio",
          name: "Carpaccio",
          description: "Bresaola, ruccola, parmesan, balsamico",
          price: "189 kr",
          category: ["gluten-free", "nut-free"],
        },
        {
          id: "piccola-insalata",
          name: "Piccola Insalata",
          description:
            "Liten sidesallad med sallad, tomat, gurka, feta, lök & ruccola",
          price: "89 kr",
          category: ["pesceterian", "vegetarian", "gluten-free", "nut-free"],
        },
      ],
    },
    {
      title: "INSALATA",
      intro:
        "På Delissimo finns alltid smarrig sallad med över 30 färska råvaror! Grönsalladbas i alla rätterna. Välj valfri sås!",
      items: [
        {
          id: "caesar",
          name: "Caesar",
          description:
            "Kycklingfilé & rökt bacon från ugnen med romansallad, hemmagjorda krutonger, gurka, tomat, parmesan & ruccola",
          price: "149 kr",
          category: ["nut-free"],
        },
        {
          id: "sole",
          name: "Sole",
          description:
            "Grillad italiensk grönsaksröra (paprika, tomater, aubergine, kronärtskocka & zucchini), färsk tomat, gurka & oliver",
          price: "145 kr",
          category: [
            "pesceterian",
            "vegetarian",
            "vegan",
            "gluten-free",
            "lactose-free",
            "nut-free",
          ],
        },
        {
          id: "pollo",
          name: "Pollo",
          description:
            "Kycklingfilé, gurka, tomat, rödlök, majs, feta & pestopasta",
          price: "145 kr",
          category: ["gluten-free"],
        },
        {
          id: "carne",
          name: "Carne",
          description:
            "Prosciutto, Salami Milano & Bresaola, gurka, körsbärstomater, parmesan, oliver, ruccola",
          price: "169 kr",
          category: ["gluten-free", "nut-free"],
        },
      ],
      outro:
        "SÅSER: Caesar, Vitlök, Vinägrette, Pesto, Mangocurry, Tryffelmayo & Chillimayo. Passar även perfekt till krispig pizza!",
    },
    {
      title: "PIZZA",
      intro:
        "Surdegspizza, jäst i 72 timmar för en unik frasig upplevelse. Alla pizzor har en bas med tomatsås samt mozzarella och toppas med färsk ruccola. (Vi har även glutenfri pizzadeg +15 kr samt veganost).",
      items: [
        {
          id: "margherita",
          name: "Margherita",
          description:
            "Klassiker där vi förhöjer smaken med vår hemmagjorda Basilikapesto",
          price: "135 kr",
          category: [
            "pesceterian",
            "vegetarian",
            "vegan",
            "gluten-free",
            "lactose-free",
          ],
        },
        {
          id: "capri",
          name: "Capri",
          description: "Prosciutto, Oliver & Kronärtskocka",
          price: "159 kr",
          category: ["gluten-free", "lactose-free", "nut-free"],
        },
        {
          id: "salami",
          name: "Salami",
          description:
            "Salami Milano, Paprika & egengjord Pesto av soltorkade tomater",
          price: "159 kr",
          category: ["gluten-free", "lactose-free"],
        },
        {
          id: "formaggio",
          name: "Formaggio",
          description:
            "Mozzarella, Parmesan, Gorgonzola & Feta. För ostälskaren!",
          price: "155 kr",
          category: ["pesceterian", "vegetarian", "gluten-free", "nut-free"],
        },
        {
          id: "bresaola",
          name: "Bresaola",
          description:
            "Lufttorkad Bresaola av Black Angus kött, Champinjoner, Tryffelolja & Parmesan",
          price: "165 kr",
          category: ["gluten-free", "nut-free"],
        },
        {
          id: "vegetale",
          name: "Vegetale",
          description:
            "Grillade Italienska Grönsaker (Zucchini, Aubergine, Kronärtskocka, Paprika & soltorkad Tomat) Toppas med basilikapesto",
          price: "155 kr",
          category: [
            "pesceterian",
            "vegetarian",
            "vegan",
            "gluten-free",
            "lactose-free",
          ],
        },
        {
          id: "di-mare",
          name: "Di Mare",
          description: "Räkor, Tonfisk, Kräftstjärtar & Romsås",
          price: "159 kr",
          category: ["pesceterian", "gluten-free", "nut-free"],
        },
        {
          id: "simone",
          name: "Simone",
          description: "Hickoryrökt Bacon, Rödlök & Färsk Vitlök",
          price: "159 kr",
          category: ["gluten-free", "lactose-free", "nut-free"],
        },
      ],
      outro: "LYXA TILL DET?! TOPPA MED EN BURRATA +60:-",
    },
    {
      title: "PASTA",
      intro:
        "Pasta av 100% Italiensk durumvete. Alla våra pastarätter toppas med färsk ruccola samt riven parmesanost. Alla pasta rätterna går att få gluten- samt laktosfria. Finns även veganska/vegetariska alternativ!",
      items: [
        {
          id: "arrabiata",
          name: "Arrabiata",
          description:
            "Körsbärstomater, Tomatsås, Rödlök, Piri Piri, Persilja & Vitlök",
          price: "129 kr",
          category: [
            "pesceterian",
            "vegetarian",
            "vegan",
            "gluten-free",
            "lactose-free",
            "nut-free",
          ],
        },
        {
          id: "funghi",
          name: "Funghi",
          description:
            "Champinjoner, Portabello, Basilika, Vitlök, Funghipesto & Grädde",
          price: "149 kr",
          category: [
            "pesceterian",
            "vegetarian",
            "gluten-free",
            "lactose-free",
          ],
        },
        {
          id: "carbonara",
          name: "Carbonara",
          description: "Bacon, Grädde, Äggula, Svartpeppar, Vitlök & Parmesan",
          price: "159 kr",
          category: ["gluten-free", "lactose-free", "nut-free"],
        },
        {
          id: "alfredo",
          name: "Alfredo",
          description: "Kycklingfilé, Grädde, Persilja, Vitlök & Parmesan",
          price: "165 kr",
          category: ["gluten-free", "lactose-free", "nut-free"],
        },
        {
          id: "rosso",
          name: "Rosso",
          description:
            "Salami Milano, Pesto av soltorkade tomater, Grädde & Tomatsås, Persilja & Rödlök",
          price: "159 kr",
          category: ["gluten-free", "lactose-free"],
        },
        {
          id: "verde",
          name: "Verde",
          description:
            "Kycklingfilé, Basilikapesto, Grädde, Körsbärstomater & Parmesan",
          price: "165 kr",
          category: ["gluten-free", "lactose-free"],
        },
        {
          id: "bianco",
          name: "Bianco",
          description:
            "Oxfilé, Funghipesto, Grädde, Rödlök, Champinjoner & Tryffelolja",
          price: "179 kr",
          category: ["gluten-free", "lactose-free"],
        },
        {
          id: "scampi",
          name: "Scampi",
          description:
            "Scampi, Rödlök, Persilja, Vitlök, Pesto Rosso, Tomatsås, Grädde & Chilli",
          price: "179 kr",
          category: ["pesceterian", "gluten-free", "lactose-free"],
        },
        {
          id: "lasagne",
          name: "Lasagne",
          description:
            "Bolognese av nötfärs, serveras med ruccola, parmesan, körsbärstomater & balsamico",
          price: "149 kr",
          category: ["gluten-free", "lactose-free", "nut-free"],
        },
      ],
    },
    {
      title: "DOLCHI",
      items: [
        {
          id: "cannoli",
          name: "Cannoli",
          description:
            "Siciliansk handgjord specialitet, frasigt krokantrör fylld med nötkräm",
          price: "95 kr",
          category: ["pesceterian", "vegetarian", "nut-free"],
        },
        {
          id: "tiramisu",
          name: "Tiramisu",
          description: "Hemmagjord italiensk klassiker",
          price: "85 kr",
          category: ["pesceterian", "vegetarian"],
        },
        {
          id: "nutellapizza",
          name: "Nutellapizza",
          description: "Frasig och farligt god, pyntas med diverse sötsaker",
          price: "119 kr",
          category: [
            "pesceterian",
            "vegetarian",
            "vegan",
            "gluten-free",
            "lactose-free",
          ],
        },
        {
          id: "affogato",
          name: "Affogato",
          description: "Espresso & vaniljglass",
          price: "75 kr",
          category: ["pesceterian", "vegetarian", "gluten-free", "nut-free"],
        },
      ],
    },
  ];

  return (
    <section className="menu-content">
      {/* loopa igenom varje menysektion (ANTIPASTI, INSALATA etc.) */}
      {menuSections.map((section) => {
        // filtrera menyartiklar baserat på valda matpreferenser
        const filteredItems = section.items.filter(
          (item) =>
            // visa alla menyartiklar om inga matpreferenser valda
            selectedPreferences.length === 0 ||
            // visa menyartiklar som uppfyller kraven för samtligt valda matpreferenser
            selectedPreferences.every((pref) => item.category.includes(pref))
        );

        return (
          <div key={section.title} className="menu-category">
            {/* visa titeln för menysektionen (ANTIPASTI, INSALATA etc.) */}
            <h3 className="menu-section-title">{section.title}</h3>

            {/* visa introtext om menysektionen har det */}
            {section.intro && (
              <p className="menu-description">{section.intro}</p>
            )}

            {/* om det finns menyartiklar som matchar valda matpreferenser så visas dom */}
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <dl key={item.id} className="menu-item">
                  <dt>{item.name}</dt>
                  <dd>
                    {item.description}
                    <span className="price">{item.price}</span>
                  </dd>
                </dl>
              ))
            ) : (
              // text för menysektionen om inga menyartiklar matchar valda matpreferenserna
              <p className="no-items-message">Inga rätter matchar dina val.</p>
            )}

            {/* visa introtext om menysektionen har det */}
            {section.outro && (
              <p className="menu-description">{section.outro}</p>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default MenuItems;
