type Roupa = {
	id: number;
	marca: string;
	modelo: string;
	titulo: string;
	preco: number;
	tipoPreco: string;
	img: string;
	tam?: string[];
};

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
		modelo: "Blusa",
		titulo: "Blusa do Brasil masculina",
		preco: 400.0,
		tipoPreco: "preco4",
		img: "../images/blusa_brasil_masc.png",
		tam: ["G", "GG"],
	},
	{
		id: 16,
		marca: "Nike",
		modelo: "Blusa",
		titulo: "Blusa do Brasil feminia",
		preco: 360.0,
		tipoPreco: "preco4",
		img: "../images/blusa_brasil_fem.png",
		tam: ["P", "M", "G"],
	},
];

const modelos: string[] = ["Blusa", "Short", "Vestido", "Mochila", "Moletom"];

const tiposNomeRadioButton: string[] = [
	"modelo",
	"tipoPreco",
	"tamanho",
	"marca",
];

const rootElement = document.querySelector("#root");
const rootElementModelo = document.querySelector("#modelo");

function render(itens: Roupa[]) {
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

// function renderRadionButtons(itens: string[]) {
// 	console.log(itens);
// 	if (rootElementModelo) {
// 		itens.forEach((item) => {
// 			rootElementModelo.innerHTML += `
// 			<li>
// 				<input name="modelo" type="radio" value=${item}/>
// 				<label for="modelo">${item}</label>
// 			</li>
//     `;
// 		});
// 	}
// }

render(roupas);
// renderRadionButtons(modelos);

// const searchButtonElement = document.querySelector("#search-button");
// const searchInputElement = document.querySelector("#input-pesquisar");
// const searchTypeElement = document.querySelector("#filter-type-select");
const radiosElementModelo: HTMLInputElement[] = Array.from(
	document.querySelectorAll("input[name=modelo]")
);
const radiosElementTamanho: HTMLInputElement[] = Array.from(
	document.querySelectorAll("input[name=tamanho]")
);
const radiosElementPreco: HTMLInputElement[] = Array.from(
	document.querySelectorAll("input[name=tipoPreco]")
);
const radiosElementMarca: HTMLInputElement[] = Array.from(
	document.querySelectorAll("input[name=marca]")
);

function search(categoria: string, value: string) {
	if (categoria === "tamanho") {
		let arrayBlusasFiltradoTamanho: Roupa[] = [];
		roupas.map((item, index) => {
			item.tam?.filter((tam) => {
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
	} else {
		const newBlusas = roupas.filter((blusa) =>
			blusa[categoria].includes(value)
		);
		render(newBlusas);
	}
}

radiosElementModelo.forEach((element) => {
	element.addEventListener("change", ({ target }) => {
		if ((target as HTMLInputElement).checked) {
			search(
				(target as HTMLInputElement).name,
				(target as HTMLInputElement).value
			);
		}
	});
});

radiosElementTamanho.forEach((element) => {
	element.addEventListener("change", ({ target }) => {
		if ((target as HTMLInputElement).checked) {
			search(
				(target as HTMLInputElement).name,
				(target as HTMLInputElement).value
			);
		}
	});
});
radiosElementPreco.forEach((element) => {
	element.addEventListener("change", ({ target }) => {
		if ((target as HTMLInputElement).checked) {
			search(
				(target as HTMLInputElement).name,
				(target as HTMLInputElement).value
			);
		}
	});
});
radiosElementMarca.forEach((element) => {
	element.addEventListener("change", ({ target }) => {
		if ((target as HTMLInputElement).checked) {
			search(
				(target as HTMLInputElement).name,
				(target as HTMLInputElement).value
			);
		}
	});
});

// renderRadionButtons(modelos);

function renderizarEstrelas(quant: number) {
	const estrelinhasContainer: HTMLDivElement | null = document.querySelector(
		"#estrelinha-container"
	);
	if (estrelinhasContainer) estrelinhasContainer.innerHTML = "";
	if (estrelinhasContainer)
		estrelinhasContainer.innerHTML += `
	<h2 class="title">Star Store</h2>
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
