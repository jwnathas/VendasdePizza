"use strict";
//soma das quantidades
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
//soma dos valores de vendas
let vendaMussarela = 0.0;
let vendaMista = 0.0;
let vendaCalabresa = 0.0;

let btnVendas = document.getElementById("vendas");
let btnEstorno = document.getElementById("estorno");
let btnPlanilha = document.getElementById("export");

//eventos
btnVendas.addEventListener("click", venda, false);
btnEstorno.addEventListener("click", estorno, false);
btnPlanilha.addEventListener("click", planilha, false);

//functions
function venda(e) {
	//venda
	if (document.getElementById("mussarela").checked) {
		somaMussarela = somaMussarela + 1;
		vendaMussarela = vendaMussarela + 25.0;
		document.getElementById("quantidade-mussarela").innerText =
			somaMussarela;
		document.getElementById("venda-mussarela").innerText =
			vendaMussarela.toFixed(2);
	} else if (document.getElementById("mista").checked) {
		somaMista = somaMista + 1;
		vendaMista = vendaMista + 25.0;
		document.getElementById("quantidade-mista").innerText = somaMista;
		document.getElementById("venda-mista").innerText =
			vendaMista.toFixed(2);
	} else if (document.getElementById("calabresa").checked) {
		somaCalabresa = somaCalabresa + 1;
		vendaCalabresa = vendaCalabresa + 25.0;
		document.getElementById("quantidade-calabresa").innerText =
			somaCalabresa;
		document.getElementById("venda-calabresa").innerText =
			vendaCalabresa.toFixed(2);
	}
}

function estorno(e) {
	//estorno
	if (document.getElementById("mussarela").checked) {
		somaMussarela = somaMussarela - 1;
		vendaMussarela = vendaMussarela - 25.0;
		if (somaMussarela < 0) {
			somaMussarela = 0;
			vendaMussarela = 0.0;
		}
		document.getElementById("quantidade-mussarela").innerText =
			somaMussarela;
		document.getElementById("venda-mussarela").innerText =
			vendaMussarela.toFixed(2);
	} else if (document.getElementById("mista").checked) {
		somaMista = somaMista - 1;
		vendaMista = vendaMista - 25.0;
		if (somaMista < 0) {
			somaMista = 0;
			vendaMista = 0.0;
		}
		document.getElementById("quantidade-mista").innerText = somaMista;
		document.getElementById("venda-mista").innerText =
			vendaMista.toFixed(2);
	} else if (document.getElementById("calabresa").checked) {
		somaCalabresa = somaCalabresa - 1;
		vendaCalabresa = vendaCalabresa - 25.0;
		if (somaMista < 0) {
			somaMuista = 0;
			vendaMista = 0.0;
		}
		document.getElementById("quantidade-calabresa").innerText =
			somaCalabresa;
		document.getElementById("venda-calabresa").innerText =
			vendaCalabresa.toFixed(2);
	}
}

function planilha(e) {
	//criar uma planilha no excel
	TableToExcel.convert(document.getElementById("table"));
}
