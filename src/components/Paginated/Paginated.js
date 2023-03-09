import React, { useState } from "react";

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
    <div>
      <button disabled={pagina <= 1} onClick={prevPage}>◀️</button>
      <input
        onChange={e => onChange(e)}
        onKeyDown={e => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input}
      ></input>
      <p>{maximo}</p>
      <button disabled={pagina >= maximo} onClick={nextPage}>▶️</button>
    </div>
  );
};

export default Paginated;
