// bottone singolo per un linguaggio
const LanguageButton = ({ language, isSelected, onClick }) => {
  return (
    <button
    // click aggiorna lo stato
      onClick={onClick}
      // imposta un colore diverso se selezionato
      className={`btn m-1 mb-4 ${isSelected ? "btn-warning" : "btn-primary"}`}
    >
        {/* mostra il titolo del linguaggio */}
      {language.title}
    </button>
  );
};

export default LanguageButton;
