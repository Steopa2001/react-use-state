const LanguageButton = ({ language, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn m-1 mb-4 ${isSelected ? "btn-warning" : "btn-primary"}`}
    >
      {language.title}
    </button>
  );
};

export default LanguageButton;
