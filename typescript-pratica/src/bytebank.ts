let saldo = 3300

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
if(elementoSaldo !== null){
    elementoSaldo.textContent = saldo.toString();
}

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener('submit', function(event) {
    event.preventDefault()

    if(!elementoFormulario.checkVisibility()){
        alert('Por favor, preencha todos os campos do formulário!')
        return
    }

    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement
    const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
    const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value
    let valor: number = parseFloat(inputValor.value)
    let data: Date = new Date (inputData.value)

    if(tipoTransacao == "Depósito"){
        saldo += valor;
    }else if(tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto"){
        saldo -= valor;
    }else{
        alert('Operação inválida')
        return
    }

    elementoSaldo.textContent = saldo.toString();

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao)
    elementoFormulario.reset()
})