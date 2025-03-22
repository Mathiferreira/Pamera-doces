


// Função para redirecionar para outra página
function redirectToPage(url) {
    window.location.href = url;
}

// Adiciona eventos de clique aos botões
document.getElementById('botão1').addEventListener('click', function() {
    redirectToPage('http://127.0.0.1:5500/paginalogin.html'); // Substitua pelo URL da página desejada
});

document.getElementById('botão2').addEventListener('click', function() {
    redirectToPage('http://127.0.0.1:5500/paginacadrasto.html'); // Substitua pelo URL da página desejada
});

// Adiciona evento para capturar a digitação na barra de pesquisa
document.getElementById('searchBar').addEventListener('input', function(event) {
    const searchTerm = event.target.value;
    console.log('Pesquisa:', searchTerm); // Aqui você pode fazer algo com o termo de pesquisa
});