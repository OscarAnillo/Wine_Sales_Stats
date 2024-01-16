import { useEffect } from "react";

export const StatsComponent = () => {
  useEffect(() => {
    let counterEl = document.querySelectorAll(".counter");
    counterEl.forEach((counter) => {
      counter.innerText = "0";
      increment();
      function increment() {
        let currentData = +counter.innerText;
        const dataCeilAttribute = counter.getAttribute("data-ceil");
        const incrementMinorNumber = dataCeilAttribute / 5;
        currentData = Math.ceil(currentData + incrementMinorNumber);
        if (currentData < dataCeilAttribute) {
          counter.innerText = currentData;
          setTimeout(increment, 100);
        } else {
          counter.innerText = dataCeilAttribute;
        }
      }
    });
  }, []);

  return (
    <div className="stats-div">
      <div className="stats-container">
        <i className="fa-solid fa-briefcase fa-3x icon"></i>
        <div className="counter" data-ceil="5">
          5
        </div>
        <h4>Años En El Mercado</h4>
      </div>
      <div className="stats-container">
        <i className="fa-solid fa-dollar-sign fa-3x icon"></i>
        <div className="counter" data-ceil="460">
          460
        </div>
        <h4>Ventas Realizadas</h4>
      </div>
      <div className="stats-container">
        <i className="fab fa-apple fa-3x icon"></i>
        <div className="counter" data-ceil="27">
          27
        </div>
        <h4>Somos Proveedores</h4>
      </div>
    </div>
  );
};
