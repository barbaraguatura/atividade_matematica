function calcular() {
    const preco = parseFloat(document.getElementById('preco').value);
    const taxaPorcentagem = parseFloat(document.getElementById('taxa').value);
    const desconto = parseFloat(document.getElementById('desconto').value) || 0;

    const promocao = preco - desconto;
    const valorTaxa = promocao * (taxaPorcentagem / 100);
    const lucroBruto = (preco - desconto) - valorTaxa; 

    const lucroArrendodado = Math.ceil(lucroBruto);

    if (lucroArrendodado < 50 ){
    document.getElementById('out-taxa').innerText = "R$" + valorTaxa.toFixed(2);
    document.getElementById('out-lucro').innerText = "R$" + lucroArrendodado.toFixed(2);
    document.getElementById('out-lucro').style.color = "red";
    document.getElementById('resultado').classList.remove('hidden');
    } else {
    document.getElementById('out-taxa').innerText = "R$" + valorTaxa.toFixed(2);
    document.getElementById('out-lucro').innerText = "R$" + lucroArrendodado.toFixed(2);
    document.getElementById('out-lucro').style.color = "green";
    document.getElementById('resultado').classList.remove('hidden');
    }
}