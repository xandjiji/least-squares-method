function fx(x){
    return (1 / x);
}

function simpson3_8(a, b, funcao){
    
    var h = (b - a) / 3;

    arrayX = [];
    arrayY = [];

    // inserindo X inicial
    var x = a;
    arrayX.push(x);

    // inserindo Y inicial
    var y = funcao(x);
    arrayY.push(y);

    for(let i = 0; i < 3; i++){
        
        // incrementando x e y
        x = x + h;
        y = funcao(x);

        // inserindo eles nos respectivos arrays
        arrayX.push(x);
        arrayY.push(y);
    }    
        
    // realizando somatorio
    var somatorio = 0;
    for(i = 0; i < arrayY.length; i++){
        if(i % 3 == 0){
            somatorio = somatorio + arrayY[i];
        } else {
            somatorio = somatorio + (3 * arrayY[i]);
        }
        
    }
    
    return ((3 * h / 8) * somatorio);
}


let resultado = simpson3_8(1, 3, fx);

console.log(resultado);


document.getElementById("resultado").innerHTML = resultado;
