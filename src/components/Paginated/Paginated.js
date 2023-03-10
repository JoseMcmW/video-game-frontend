import React, { useState } from "react";
import "../Paginated/Paginated.css"

const Paginated = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);


  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const prevPage = () => {
    setInput(parseInt(input) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setPagina(parseInt(e.target.value));
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > maximo ||
        isNaN(parseInt(e.target.value))
      ) {
        setPagina(1);
        setInput(1);
      } else {
        setPagina(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="d-flex gap-3 p-3 justify-content-center">
      <button className="buttonPage" disabled={pagina <= 1} onClick={prevPage}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icono bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
</svg></button>
      <p className="letter mt-2">Página</p>
      <input
        className="search"
        onChange={e => onChange(e)}
        onKeyDown={e => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input}
        maxLength="2"
      ></input>
      <p className="letter mt-2">de {maximo}</p>
      <button className="buttonPage" disabled={pagina >= maximo} onClick={nextPage}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icono bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
</svg></button>
    </div>
  );
};

export default Paginated;
