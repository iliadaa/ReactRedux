import React from "react";
import "./Form.scss";
import icon_image from "../assets/Livello_11.svg";
import Bulletin from "../components/form/Bulletin";
const Form = () => {
  return (
    <div className="container">
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
            <br />
            <span className="desc-costo">
              Il costo del servizio è fisso a b <span></span>
              <span className="costo-value">2,00€</span>
            </span>
          </p>
        </div>
        <hr />
        <div className="input-form">
          <Bulletin />
        </div>
        <div className="prenota-footer">
          <p className="footer-description">
            Prima di confermare la prenotazione verificare di aver inserito
            correttamente il numero di Conto Corrente Postale o l’IBAN del
            beneficiario e che i dati riportati nella sezione “Eseguito da”
            corrispondano a quelli indicati dal richiedente. Qualora dovessero
            essere inseriti dati non corretti il pagamento potrebbe essere
            inviato ad un beneficiario diverso rispetto a quello desiderato
            oppure il beneficiario potrebbe non riconoscere l’esecutore,
            chiedendo un nuovo pagamento. Tutti i dati forniti sono trattati nel
            rispetto della normativa vigente sul trattamento dei dati, come
            riportato nella nostra <a href="/">Privacy Policy</a> .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
