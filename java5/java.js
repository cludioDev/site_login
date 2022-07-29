function trocar() { 
    document.getElementById('titulo').innerHTML = 'trocarr titulo';
    document.querySelector('.texto').innerHTML = 'clicou';
}

function somar(x,y) {
    let total = x + y ;

    return total; 
}
var resultado = somar( 12,12);

console.log(resultado);

