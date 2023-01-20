import React, { useEffect } from "react";
import i from "../assets/imagem1.jpg";

function Quadrado({ img, index, quantidadeCartas }) {
  useEffect(() => {
    document.querySelector(`[id='${index}']`).addEventListener("click", (e) => {
      
      e.target.classList.add("active");
      var select = document.querySelectorAll(".active");
console.log(select)
      if (select.length > 1 && select.length < 3) {
        if (select[0].src === select[1].src) {
          console.log("iguais"); //pontuar
          window.localStorage.setItem(
            "placar",
            (quantidadeCartas / window.localStorage.getItem("rodadas")) * 100
          );
          
          window.dispatchEvent(new Event("storage"));
          select.forEach((q) => {
            q.classList.remove("active");
            q.classList.add("match");
          });
        } else {
          console.log("nao sao iguais");

          window.localStorage.setItem(
            "rodadas",
            parseInt(window.localStorage.getItem("rodadas")) + 1
          );

          setTimeout(function () {
            select[0].classList.remove("active");
            select[1].classList.remove("active");
          }, 200);
        }
      }
    });
  });
  return (
    <div className="quadrado d-flex justify-content-center ">
      <img id={index} src={img.url} className="imgquadrado"></img>
    </div>
  );
}

export default Quadrado;
