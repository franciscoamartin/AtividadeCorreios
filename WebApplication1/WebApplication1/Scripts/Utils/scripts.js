
$('#ceporigem').mask("00000-000");
$('#cepdestino').mask("00000-000");
$('#nVlValorDeclarado').mask('#.###,00', { reverse: true });

$(document).ready(function () {
    $('#consultar').click(function () {
        //obter as informações dos meus campos
        //Obtemos as informações do nosso formulario web completo
        var informacoes = $('#formenviar').serializeArray();
        //Obtemos o atributo que indica a pagina que vamos enviar o post
        var obterAtributo = $('#formenviar').attr('send-post');

      
        //Enviamos o post para nosso servidor web
        $.post("https://usysweb.com.br/api/" + obterAtributo + ".php?giomar=true", informacoes, function (data) {
            //aqui como recebemos uma string com formato de JSON
            //temos que passar ela para o JSON parecido com o int.Parse()
            data = JSON.parse(data);

            //Aqui carregamos as informações automaticamente
            $.each(data.cServico, function (key, value) {
                $('input[name="{key}"]'.replace("{key}", key)).val(value); //valor de entrada a ser susbstituida, mesmo name recebido pela resposta do server. 
            });
        });
    });

    $('#limpar').click(function () {
        ClearScreen();
    });

});


function ClearScreen() {
    var myInputs = $('input[type="text"]');
    myInputs.val("");
}
