
const LanguageCard = ({ language }) => {

    //controllo se language è vuoto
    if(!language) {
        return (
            <div className="card">
                <div className="card-body">
                    Nessun linguaggio selezionato
                </div>
            </div>
        )
    }

    //mostro i dettagli del linguaggio
  return (
    <div className="card">
        <div className="card-body">
            <h3 className="card-title"></h3>
            <p className="card-text"></p>
        </div>
    </div>
  )
}

export default LanguageCard;
