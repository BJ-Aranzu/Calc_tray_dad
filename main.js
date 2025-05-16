document.addEventListener("DOMContentLoaded", () => {
  // First section: Corte de bandeja a nivel
  const section1 = document.querySelectorAll(".menu-section")[0];
  const [inputX1, inputY1, inputG1] = section1.querySelectorAll("input");
  const [resA1, resB1] = section1.querySelectorAll(".result-label");
  const button1 = section1.querySelector(".calculate-button");

  button1.addEventListener("click", () => {
    const X = parseFloat(inputX1.value);
    const Y = parseFloat(inputY1.value);
    const G = parseFloat(inputG1.value);

    if (isNaN(X) || isNaN(Y) || isNaN(G)) {
      alert("Por favor ingrese valores válidos para X, Y y G.");
      return;
    }

    const radians = Math.atan(Y / X);
    const A = Math.tan(radians / 2) * G * 2;
    const B = Math.sqrt(X ** 2 + Y ** 2);

    resA1.textContent = `A Corte= ${A.toFixed(2)} mm`;
    resB1.textContent = `B Recorrido= ${B.toFixed(2)} mm`;
  });

  // Second section: Corte curva 45°
  const section2 = document.querySelectorAll(".menu-section")[1];
  const [inputX2, inputY2, inputG2] = section2.querySelectorAll("input");
  const [resA2, resB2, resC2, resD2] = section2.querySelectorAll(".result-label");
  const button2 = section2.querySelector(".calculate-button");

  button2.addEventListener("click", () => {
    const X = parseFloat(inputX2.value);
    const Y = parseFloat(inputY2.value);
    const G = parseFloat(inputG2.value);

    if (isNaN(X) || isNaN(Y) || isNaN(G)) {
      alert("Por favor ingrese valores válidos para X, Y y G.");
      return;
    }

    const angleRad = Math.atan(Y / X);
    const A = Math.tan(angleRad / 2) * G * 2;
    const B = Math.tan((Math.PI / 2 - angleRad) / 2) * G * 2;
    const C = Math.sqrt(X ** 2 + Y ** 2);
    const D = C - (A / 2) - (B / 2);

    resA2.textContent = `A Corte= ${A.toFixed(2)} mm`;
    resB2.textContent = `B Corte= ${B.toFixed(2)} mm`;
    resC2.textContent = `C Recorrido= ${C.toFixed(2)} mm`;
    resD2.textContent = `D Recorrido= ${D.toFixed(2)} mm`;
  });

  // Third section: Corte simple
  const section3 = document.querySelectorAll(".menu-section")[2];
  const [inputX3, inputAngle3, inputG3] = section3.querySelectorAll("input");
  const [resA3, resB3, resC3, resD3] = section3.querySelectorAll(".result-label");
  const button3 = section3.querySelector(".calculate-button");

  button3.addEventListener("click", () => {
    const X = parseFloat(inputX3.value);
    const angle = parseFloat(inputAngle3.value);
    const G = parseFloat(inputG3.value);

    if (isNaN(X) || isNaN(angle) || isNaN(G)) {
      alert("Por favor ingrese valores válidos para X, Ángulo y G.");
      return;
    }

    const beta = 90 - angle / 2;
    const betaRad = beta * Math.PI / 180;

    const A = Math.tan(betaRad / 2) * G * 2;
    const B = X;
    const C = B - A;
    const D = B / (2 * Math.cos(betaRad));

    resA3.textContent = `A Corte= ${A.toFixed(2)} mm`;
    resB3.textContent = `B Recorrido= ${B.toFixed(2)} mm`;
    resC3.textContent = `C Recorrido= ${C.toFixed(2)} mm`;
    resD3.textContent = `D Recorrido= ${D.toFixed(2)} mm`;
  });
});
