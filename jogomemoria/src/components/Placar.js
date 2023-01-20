import React, { useEffect, useState } from "react";

function Placar() {
  const [resultado, setresultado] = useState(0);
  useEffect(() => {
    setresultado(window.localStorage.getItem("placar"));
  }, [resultado]);
  return (
    <div className="placar">
      <div>PLACAR:</div>
      {<div className="resultado">{resultado}</div>}
      {window.addEventListener("storage", () => {
        console.log("wtf");
        setresultado(window.localStorage.getItem("placar"));
      })}
    </div>
  );
}

export default Placar;
