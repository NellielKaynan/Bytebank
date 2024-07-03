let saldo = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor');

elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector('.block-nova-transacao form');

elementoFormulario.addEventListener('submit', function(event) {
    event.preventDefault();
    if(!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os cursos da transação");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector('#valor');
    const inputData = elementoFormulario.querySelector('#data');

    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    if(tipoTransacao == 'Deposito') {
        saldo += valor;
    } else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor;
    } else {
        alert("Transação Inválido");
        return;
    }

    elementoSaldo.textContent = saldo;

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }
    console.log(novaTransacao);
    elementoFormulario.reset();
})



