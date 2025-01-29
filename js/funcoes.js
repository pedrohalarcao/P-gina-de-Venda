
function alterarquantidade(produto, acao){
    const quantidade = document.getElementById('quantidade_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    if(acao == '-' && quantidade.innerHTML == 0){
        alert('Atenção! A quantidade não pode ser menor que 0.')
    } else {
        acao == '+' ? quantidade.innerHTML++ : quantidade.innerHTML--
        total.innerHTML = quantidade.innerHTML * valor.innerHTML
        soma()
    }



}

function soma(){
    let soma = 0

    for(let i = 1; i < 4; i++){
        soma += Number(document.getElementById('total_' + i).innerHTML)
    }

    document.getElementById('subtotal').innerHTML = soma

}