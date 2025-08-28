
const LanguageCard = ({ language }) => {

    //controllo se language è vuoto, se è vuoto mostra un messaggio
    if(!language) {
        return (
            <div className="card">
                <div className="card-body text-center">
                    Nessun linguaggio selezionato
                </div>
            </div>
        )
    }

   // Mostra titolo e descrizione del linguaggio selezionato
  return (
    <div className="card mx-1">
        <div className="card-body">
            <h3 className="card-title">{language.title}</h3>
            <p className="card-text">{language.description}</p>
        </div>
    </div>
  )
}

export default LanguageCard;
