const LanguageButton = ({ language, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn m-1 ${isSelected ? "btn-primary" : "btn-outline-primary"}`}
    >
      {language.title}
    </button>
  );
};

export default LanguageButton;
