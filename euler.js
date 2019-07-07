function funcao(x, y) {
    return (Math.sin(x) * (-1));
}


function euler(f, x0, y0, xf, h) {

    var x = x0;
    var y = y0;

    // condicoes de parada
    while((x>xf && x0>xf) || (x<xf && x0<xf)) {
        // atualizando os valores
        y = y + (h * f(x, y))
        x = x + h;
        
    }

    return y;
}

let h = 0.00001;
let tf = 10;
let x0 = (Math.PI / 2);
let y0 = 0;

let resultado2 = euler(funcao, x0, y0, tf, h);


console.log(resultado2);
document.getElementById("resultado-2").innerHTML = resultado2;
