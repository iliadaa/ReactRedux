import React from "react";
import { useState } from "react";
import Input from "../genericInput/Input";
import "./Bulletin.scss";

const Bulletin = () => {
  const [values, setValues] = useState({
    tipoBbollettino: "",
    numeroContoCorrente: "",
    diEuro: "",
    causale: "",
    fisica: "",
    giurisica: "",
    nome: "",
    cognome: "",
    denominazione: "",
    indirizzo: "",
    citta: "",
  });

  const inputs = [
    {
      id: 1,
      name: "tipoBbollettino",
      type: "text",
      placeholder: "Tipo Bollettino",
      label: "Tipo Bolletino",
      required: true,
      className: "color input bold ",
      // pattern: "[A-Za-z]{2,20}",
    },
    {
      id: 2,
      name: "numeroContoCorrente",
      type: "text",
      placeholder: "Numero Conto Corrente",
      label: "Numero Conto Corrente",
      required: true,
      className: "input bold color",
      // pattern: "[A-Za-z]{3,20}",
    },
    {
      id: 3,
      name: "intestatoA",
      type: "text",
      placeholder: "CAI-SUC.MI INCASSI WIND TELECOMUNICAZIONI II",
      label: "Intestato a",
      className: "input bold",
      // pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
    {
      id: 4,
      name: "diEuro",
      type: "number",
      placeholder: "00.00",
      label: "di Euro €",
      required: true,
      className: "input bold",
      // pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
    {
      id: 5,
      name: "causale",
      type: "text",
      placeholder: "Causale",
      label: "Causale",
      required: true,
      className: "input",
      // pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
    {
      id: 6,
      name: "fisica",
      type: "checkbox",
      placeholder: "Fisica",
      label: "Fisica",
      required: true,
      className: "input",
      // pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
    {
      id: 7,
      name: "giurisica",
      type: "checkbox",
      placeholder: " Giurisica",
      label: "Giurisica",
      required: true,
      className: "input",
      // pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
    {
      id: 8,
      name: "nome",
      type: "text",
      placeholder: "Nome",
      label: "Nome ",
      required: true,
      className: "input",
      // pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
    {
      id: 9,
      name: "cognome",
      type: "text",
      placeholder: "Cognome",
      label: "Cognome",
      required: true,
      className: "input",
      // pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
    {
      id: 10,
      name: "denominazione",
      type: "text",
      placeholder: "Denominazione",
      label: "Denominazione",
      required: true,
      className: "input",
      // pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
    {
      id: 11,
      name: "indirizzo",
      type: "text",
      placeholder: "Indirizzo",
      label: "Indirizzo",
      required: true,
      className: "input",
      // pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },

    {
      id: 12,
      name: "citta",
      type: "text",
      placeholder: "Città",
      label: "Città",
      required: true,
      className: "input",
      // pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
  ];

  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });
  return (
    <>
      <form>
        <div className="form">
          <div className="left-form">
            {inputs
              .map((input) => (
                <div key={input.id} className="input-field">
                  <label>{input.label}</label>
                  <Input
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                </div>
              ))
              .slice(0, 5)}
          </div>
          <div className="right-form">
            <div className="fisica-giurisica">
              {inputs
                .map((input) => (
                  <div key={input.id}>
                    <label>{input.label}</label>
                    <Input
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  </div>
                ))
                .slice(5, 7)}
            </div>
            <div>
              {inputs
                .map((input) => (
                  <div key={input.id} className="input-field">
                    <label>{input.label}</label>
                    <Input
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  </div>
                ))
                .slice(7, 9)}
            </div>
            <div>
              {inputs
                .map((input) => (
                  <div key={input.id} className="input-field">
                    <label>{input.label}</label>
                    <Input
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  </div>
                ))
                .slice(9, 10)}
            </div>
            <div className="indirizzo-citta">
              {inputs
                .map((input) => (
                  <div key={input.id} className="input-field">
                    <label>{input.label}</label>
                    <Input
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  </div>
                ))
                .slice(10, 11)}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Bulletin;
