import { useState } from "react";
import languages from "./data/languages";
import LanguageButton from "./components/LanguageButton";
import LanguageCard from "./components/LanguageCard";

function App() {
  // stato per tenere traccia del linguaggio selezionato
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="conatiner">
      <h1>Learn Web development</h1>

      <div>
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


      <LanguageCard language={selectedLanguage} />
    </div>
  );
}

export default App;
