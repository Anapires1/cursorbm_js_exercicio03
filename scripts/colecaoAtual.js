"use strict";
const roupas = [
    {
        id: 1,
        marca: "Farm",
        modelo: "Blusa",
        titulo: "Blusa amarração",
        preco: 251.2,
        tipoPreco: "preco3",
        img: "../images/blusa.png",
        tam: ["P", "M"],
    },
    {
        id: 2,
        marca: "Adidas",
        modelo: "Blusa",
        titulo: "Camisa Wonder",
        preco: 548.9,
        tipoPreco: "preco5",
        img: "../images/camisa_wonder.png",
        tam: ["P", "M"],
    },
    {
        id: 3,
        marca: "Adidas",
        modelo: "Camisa",
        titulo: "Camisa",
        preco: 540.8,
        tipoPreco: "preco5",
        img: "../images/camisa_adidas.png",
        tam: ["M", "G"],
    },
    {
        id: 4,
        marca: "Farm",
        modelo: "Blusa",
        titulo: "Cropped estrela",
        preco: 549.99,
        tipoPreco: "preco5",
        img: "../images/cropped_estrela.png",
        tam: ["PP", "M"],
    },
    {
        id: 5,
        marca: "Puma",
        modelo: "Moletom",
        titulo: "Moletom feminino",
        preco: 259.6,
        tipoPreco: "preco3",
        img: "../images/moletom_fem.png",
        tam: ["M", "G"],
    },
    {
        id: 6,
        marca: "Puma",
        modelo: "Moletom",
        titulo: "Moletom masculino",
        preco: 300.0,
        tipoPreco: "preco3",
        img: "../images/moletom_mas.png",
        tam: ["G", "GG"],
    },
    {
        id: 7,
        marca: "Farm",
        modelo: "Vestido",
        titulo: "Vestido",
        preco: 453.5,
        tipoPreco: "preco5",
        img: "../images/vestido.png",
        tam: ["PP", "P"],
    },
    {
        id: 8,
        marca: "Nike",
        modelo: "Blusa",
        titulo: "Blusa academia",
        preco: 58.5,
        tipoPreco: "preco1",
        img: "../images/blusa_academia.png",
        tam: ["P", "M", "G"],
    },
    {
        id: 9,
        marca: "Farm",
        modelo: "Vestido",
        titulo: "Vestido floral",
        preco: 550.0,
        tipoPreco: "preco5",
        img: "../images/vestido_floral.png",
        tam: ["PP", "P"],
    },
    {
        id: 10,
        marca: "Puma",
        modelo: "Short",
        titulo: "Short academia feminino",
        preco: 110.99,
        tipoPreco: "preco1",
        img: "../images/short_fem.png",
        tam: ["M", "G"],
    },
    {
        id: 11,
        marca: "Farm",
        modelo: "Mochila",
        titulo: "Mochila mini",
        preco: 200.0,
        tipoPreco: "preco2",
        img: "../images/mochila_2.png",
    },
    {
        id: 12,
        marca: "Puma",
        modelo: "Short",
        titulo: "Short academia masculino",
        preco: 120.0,
        tipoPreco: "preco1",
        img: "../images/short_masc.png",
        tam: ["M", "GG"],
    },
    {
        id: 13,
        marca: "Farm",
        modelo: "Blusa",
        titulo: "Cropped",
        preco: 249.4,
        tipoPreco: "preco2",
        img: "../images/cropped.png",
        tam: ["PP", "P"],
    },
    {
        id: 14,
        marca: "Farm",
        modelo: "Mochila",
        titulo: "Mochila",
        preco: 159.45,
        tipoPreco: "preco2",
        img: "../images/mochila.png",
    },
    {
        id: 15,
        marca: "Nike",
        modelo: "Mochila",
        titulo: "Mochila Unissex",
        preco: 400.0,
        tipoPreco: "preco4",
        img: "../images/mochila_unissex.png",
    },
    {
        id: 16,
        marca: "Nike",
        modelo: "Blusa",
        titulo: "Camisa Nike masculina",
        preco: 360.0,
        tipoPreco: "preco4",
        img: "../images/camisa_comprida.png",
        tam: ["P", "M", "G"],
    },
];
const rootElement = document.querySelector("#root");
const rootElementModelo = document.querySelector("#modelo");
function render(itens) {
    if (rootElement) {
        rootElement.innerHTML = "";
        itens.forEach((item) => {
            rootElement.innerHTML += `
      <div class="item-wrapper">
			<img class="imagem" src=${item.img}></img>
			<div class="text-container">
			<h2>R$ ${item.preco}</h4>
				<h3>${item.titulo}</h2>
				<h4>${item.marca}</h3>
			</div>
      </div>
    `;
        });
    }
}
render(roupas);
const radiosElementModelo = Array.from(document.querySelectorAll("input[name=modelo]"));
const radiosElementTamanho = Array.from(document.querySelectorAll("input[name=tamanho]"));
const radiosElementPreco = Array.from(document.querySelectorAll("input[name=tipoPreco]"));
const radiosElementMarca = Array.from(document.querySelectorAll("input[name=marca]"));
function search(categoria, value) {
    if (categoria === "tamanho") {
        let arrayBlusasFiltradoTamanho = [];
        roupas.map((item, index) => {
            var _a;
            (_a = item.tam) === null || _a === void 0 ? void 0 : _a.filter((tam) => {
                if (tam === value) {
                    return (arrayBlusasFiltradoTamanho = [
                        ...arrayBlusasFiltradoTamanho,
                        roupas[index],
                    ]);
                }
                return false;
            });
        });
        render(arrayBlusasFiltradoTamanho);
    }
    else {
        const newBlusas = roupas.filter((blusa) => blusa[categoria].includes(value));
        render(newBlusas);
    }
}
radiosElementModelo.forEach((element) => {
    element.addEventListener("change", ({ target }) => {
        if (target.checked) {
            search(target.name, target.value);
        }
    });
});
radiosElementTamanho.forEach((element) => {
    element.addEventListener("change", ({ target }) => {
        if (target.checked) {
            search(target.name, target.value);
        }
    });
});
radiosElementPreco.forEach((element) => {
    element.addEventListener("change", ({ target }) => {
        if (target.checked) {
            search(target.name, target.value);
        }
    });
});
radiosElementMarca.forEach((element) => {
    element.addEventListener("change", ({ target }) => {
        if (target.checked) {
            search(target.name, target.value);
        }
    });
});
