"use strict";
const roupasPrevia = [
    {
        id: 1,
        titulo: "CANDY COLORS",
        img: "../images/candy.png",
    },
    {
        id: 2,
        titulo: "BOHO CHIC",
        img: "../images/boho.png",
    },
    {
        id: 3,
        titulo: "ALFAIATARIA FRESH",
        img: "../images/alfaiataria.png",
    },
];
function renderizaPreviaColecao(itens, quant) {
    const estrelinhasContainer = document.querySelector("#estrelinha-container");
    if (estrelinhasContainer) {
        estrelinhasContainer.innerHTML = "";
        itens.forEach((item) => {
            estrelinhasContainer.innerHTML += `
			<div class="container-roupa-previa">
			<img class="imagem" src=${item.img}></img>
			<div class="text-container">
			<h2>${item.titulo}</h2>
			</div>
			</div>
		`;
        });
    }
    for (let i = 0; i < quant; i++) {
        const x = Math.round(Math.random() * 100);
        const y = Math.round(Math.random() * 100);
        const delay = Math.random();
        const randomSizeEstrelinha = Math.random() + 1;
        if (estrelinhasContainer) {
            estrelinhasContainer.innerHTML += `
			<div class="estrela" style="top: ${y}%; left: ${x}%; animation: anim-stars 0.5s ${delay}s infinite; width: ${randomSizeEstrelinha}px; height: ${randomSizeEstrelinha}px"></div>
			`;
        }
    }
}
function renderizarEstrelas(quant) {
    const estrelinhasContainer = document.querySelector("#estrelinha-container");
    if (estrelinhasContainer)
        estrelinhasContainer.innerHTML = "";
    if (estrelinhasContainer)
        estrelinhasContainer.innerHTML += `
		<div class="title-container">
			<h1 class="text-info">Coleção</h1>
			<h1 class="text-info">Primavera-Verão 22</h1>
			<button id="button-home">Prévia</button>
		</div>
	`;
    for (let i = 0; i < quant; i++) {
        const x = Math.round(Math.random() * 100);
        const y = Math.round(Math.random() * 100);
        const delay = Math.random();
        const randomSizeEstrelinha = Math.random() + 1;
        if (estrelinhasContainer) {
            estrelinhasContainer.innerHTML += `
			<div class="estrela" style="top: ${y}%; left: ${x}%; animation: anim-stars 0.5s ${delay}s infinite; width: ${randomSizeEstrelinha}px; height: ${randomSizeEstrelinha}px"></div>
			`;
        }
    }
}
renderizarEstrelas(250);
const homeButtonElement = document.getElementById("button-voltar-home");
homeButtonElement === null || homeButtonElement === void 0 ? void 0 : homeButtonElement.addEventListener("click", () => renderizarEstrelas(250));
const previaButtonElement = document.getElementById("button-home");
previaButtonElement === null || previaButtonElement === void 0 ? void 0 : previaButtonElement.addEventListener("click", () => renderizaPreviaColecao(roupasPrevia, 250));
