let valor 

valor = 0

function calcular(operacao){
    if(operacao == 'somar'){
        valor++
    }
    if(operacao == 'subtrair'){
        valor--
    }
    document.getElementById('x').innerText = valor
}