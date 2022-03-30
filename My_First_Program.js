const listaDeCompras = {};
let comida;
let categoria;
let laticínios = [];
let carnes = [];
let verduras = [];
let nova;
let nova2;
let nova3;

function check(valid) {
    return valid === "sim" || valid === "não" || valid === "remover"
}
function check2(categoriaValida) {
    return laticínios.includes(categoriaValida) || carnes.includes(categoriaValida) || verduras.includes(categoriaValida)
}
let input = prompt("Você deseja adicionar uma comida na sua lista de compras? (sim ou não)")

while (check(input) === false) {
    alert(`${input} não é uma opção válida!`);
    input = prompt("Você deseja adicionar uma comida na sua lista de compras?(Sim ou Nâo)")
}
while (input === "sim" || input === "remover") {
    if (input.toLowerCase() === "sim") {
        comida = prompt("Qual comida gostaria de adicionar?")
        categoria = prompt(`Em qual categoria ${comida} se encaixa? (Laticínios, carnes ou verduras)`)
        if (categoria.toLowerCase() === "laticínios") {
            laticínios.push(comida);
            listaDeCompras.laticínios = laticínios;
        } else if (categoria.toLowerCase() === "carnes") {
            carnes.push(comida);
            listaDeCompras.carnes = carnes;
        } else if (categoria.toLowerCase() === "verduras") {
            verduras.push(comida);
            listaDeCompras.verduras = verduras;
        } else {
            alert(`Não existe uma categoria chamada '${categoria}'. Ecolha novamente uma comida uma categoria válida`)
        }
    }
    if (input.toLowerCase() === "remover") {
        console.log(listaDeCompras);
        comida = prompt(`Qual comida deseja remover? Items na sua lista: ${laticínios} ${carnes} ${verduras}`)
        if (check2(comida) === false) {
            alert(" Este item não existe!")
            console.log("Insira uma comida válida!")
        }
        else if (check2(comida) === true) {
            if (listaDeCompras.laticínios.indexOf(comida) !== -1) {
                nova = listaDeCompras.laticínios.indexOf(comida);
                listaDeCompras.laticínios.splice(nova, 1);
                console.log(`${comida} was removed from your list`)
            }
            else if (listaDeCompras.carnes.indexOf(comida) !== -1) {
                nova2 = listaDeCompras.carnes.indexOf(comida);
                listaDeCompras.carnes.splice(nova, 1);
                console.log(`${comida} was removed from your list`)
            }
            else if (listaDeCompras.verduras.indexOf(comida) !== -1) {
                nova3 = listaDeCompras.verduras.indexOf(comida);
                listaDeCompras.verduras.splice(nova, 1);
                console.log(`${comida} was removed from your list`)
            }
        }
    }
    if (check(input) === true) {
        if (laticínios.length === 0 && carnes.length === 0 && verduras.length === 0) {
            input = prompt("Gostaria de adicionar uma comida? (sim ou não).");
        } else {
            input = prompt("Gostaria de adicionar uma comida? (sim ou não). Para remover um item, digite REMOVER");
        }

    }
    while (check(input) === false) {
        alert("invalid option");
        if (laticínios.length === 0 && carnes.length === 0 && verduras.length === 0) {
            input = prompt("Gostaria de adicionar uma comida? (sim ou não).");
        } else {
            input = prompt("Gostaria de adicionar uma comida? (sim ou não). Para remover um item, digite REMOVER");
        }
    }
}
console.log(listaDeCompras);





// if (input !== "sim" || input !== "não" || input !== "remover") {
//     alert(`${input} não é uma opção válida!`);
//     if (laticínios.length === 0 && carnes.length === 0 && verduras.length === 0) {
//         input = prompt("Você deseja adicionar uma comida na sua lista de compras?(Sim ou Nâo)");
//     }
//     else {
//         input = prompt("Você deseja adicionar uma comida na sua lista de compras?(Sim ou Nâo). Para remover um item, digite REMOVER");
//     }
// }
// else if (check(input) === true) {
//     if (laticínios.length === 0 && carnes.length === 0 && verduras.length === 0) {
//         input = prompt("Você deseja adicionar uma comida na sua lista de compras?(Sim ou Nâo)");
//     }
//     else {
//         input = prompt("Você deseja adicionar uma comida na sua lista de compras?(Sim ou Nâo). Para remover um item, digite REMOVER");
//     }
// }