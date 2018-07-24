//Só executa o conteúdo quando o documento estiver carregado
$(document).ready(function () {
    var $meuButton = $("#meu-button");
    $meuButton.on("click", function () {
        alert("Teste Evento Função Anônima");
    });

    var $precos = $(".preco-produto li");
    $precos.on("click", function () {
        alert($(this).text());
    });

    var $login = $("#login");
    var $popupForm = $(".popup-form");
    $login.on("click", function () {
        $popupForm.toggle(1000);
    });
});



