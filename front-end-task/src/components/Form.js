import React from "react";
import "./Form.scss";
import icon_image from "../assets/Livello_11.svg";
function Form() {
  return (
    <>
      <div className="container-form">
        <div className="prenota-header">
          <div className=" title-icon">
            <label className="title-label">Prenota bollettino</label>
            <img src={icon_image} alt="icon" />
          </div>
          <p className="description-header">
            Prenotazione in ottemperanza della normativa italiana come previsto
            dall’art. 17 del D.Lgs 231/07 ed indicato dalle Linee Guida per il
            Servizio di Pagamento Bollettini di Banca d’Italia. Per effettuare
            il pagamento di un bollettino bianco o parzialmente premarcato, di
            tipologia 123, 451, 674, dovrai compilare questi campi. Una volta
            inseriti i dati potrai procedere a visualizzare il riepilogo della
            tua prenotazione. Comunica o stampa il codice prenotazione che viene
            generato al termine della procedura e recati presso l’agenzia Bpoint
            per eseguire il pagamento. La prenotazione ha una durata di 24 ore.
            <br></br>
            <span
              style={{
                color: "#FC6820",
              }}
            >
              Il costo del servizio è fisso a 2,00€
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Form;
