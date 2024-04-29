// Seleciona o input dentro do elemento
let input = document.querySelector(".form input");
let button = document.querySelector(".form button");
let qrImg = document.querySelector(".qr-img img");

// Adiciona um evento de clique ao botão
button.addEventListener("click", function() {
    // Obtém o valor inserido no input
    let data = input.value;

    // Verifica se o valor inserido no input tem comprimento maior que 0
    if (data.length > 0) {
        // Cria a URL para gerar o código QR com base nos dados inseridos
        let imgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + data;
        
        // Define o atributo src da imagem como a URL criada
        qrImg.src = imgSrc;
    }
});
