 // import hook useState 
import { useState } from "react";
// import dati linguaggi
import languages from "./data/languages"; 
// import bottone
import LanguageButton from "./components/LanguageButton";
// import card dettagli
import LanguageCard from "./components/LanguageCard";

function App() {
  // stato per tenere traccia del linguaggio selezionato (in questo caso languages[0] perchè parte dal primo, cioè HTML)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div>

      <h1 className="mb-5">Learn Web development</h1>
      <div className="container">
        <div>
          {/* Mappa dei bottoni per ogni linguaggio  */}
          {languages.map((lang) => {
            return (
              <LanguageButton
                // chiave unica per ogni bottone
                key={lang.id}
                // passa i dati del linguaggio al bottone
                language={lang}
                // evidenzia il bottone se è selezionato
                isSelected={selectedLanguage && selectedLanguage.id === lang.id}
                // al click aggiorna lo stato con il linguaggio selezionato
                onClick={() => setSelectedLanguage(lang)}
              />
            );
          })}
        </div>

        {/* pulsante per fare il reset */}
      <button
        className="btn btn-secondary mx-1 mb-2"
        onClick={() => setSelectedLanguage(null)}
      >
        Reset
      </button>

        <LanguageCard language={selectedLanguage} />
      </div>
    </div>
  );
}

export default App;
