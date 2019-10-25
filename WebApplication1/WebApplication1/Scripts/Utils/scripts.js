
//$(document).ready(function () {

//    $('#limpar').click(function () {
//        ClearScreen();
//    });



//});


//$("#consultar").click(function () {

//    var params = {
//        'sCepOrigem': $('#ceporigem').val(),
//        'sCepDestino': $('#cepdestino').val(),
//        'nVlPeso': $('#peso').val(),
//        'nCdFormato': $("#formatoencomenda :selected").val(),
//        'nVlComprimento': $('#comprimento').val(),
//        'nVlAltura': $('#altura').val(),
//        'nVlLargura': $('#largura').val(),
//        'nVlDiametro': $('#diametro').val(),
//        'sCdMaoPropria': $("#entregamao :selected").val(),
//        'nVlValorDeclarado': $('#valordeclarado').val(),
//        'sCdAvisoRecebimento': $("#avisorecebimento :selected").val(),
//        'StrRetorno': 'xml',
//        'nCdServico': $("#selectservico :selected").val(),
//    };

//    var url = 'https://usysweb.com.br/api/correiosambev.php';

//    var options = {
//        'uri': url,
//        'method': 'GET',
//        'qs': params
//    };

//    $.getJSON(options.uri, options.qs, function (data) {
//        //debugger

//        $('#resultadoValor').val("R$ " + data.cServico.Valor);
//        $('#resultadoPrazo').val(data.cServico.PrazoEntrega + " dia(s)");
//        $('#resultadoSemAdicionais').val("R$ " + data.cServico.ValorSemAdicionais);
//        //$('#resultadoEmMaos').val(data.cServico.EntregaDomiciliar);




//        //alert(" Valor Final" + data.cServico.Valor
//        //    + "\n\rPrazo Entrega " + data.cServico.PrazoEntrega
//        //    + "\n\rValor Sem Adicionais " + data.cServico.ValorSemAdicionais
//        //);
//    });

//});


$('#ceporigem').mask("00000-000");
$('#cepdestino').mask("00000-000");
$('#valordeclarado').mask('#.###,00', { reverse: true });

$(document).ready(function () {
    $('#consultar').click(function () {
        //obter as informações dos meus campos
        //Obtemos as informações do nosso formulario web completo
        var informacoes = $('#formenviar').serializeArray();
        //Obtemos o atributo que indica a pagina que vamos enviar o post
        var obterAtributo = $('#formenviar').attr('send-post');

        debugger
        //Enviamos o post para nosso servidor web
        $.post("http://usysweb.com.br/api/" + obterAtributo + ".php?giomar=true", informacoes, function (data) {
            //aqui como recebemos uma string com formato de JSON
            //temos que passar ela para o JSON parecido com o int.Parse()
            data = JSON.parse(data);

            //Aqui carregamos as informações automaticamente
            $.each(data.cServico, function (key, value) {

                //$('#resultadoValor').val("R$ " + value.cServico.Valor);
                //$('#resultadoPrazo').val(value.cServico.PrazoEntrega + " dia(s)");
                //$('#resultadoSemAdicionais').val("R$ " + value.cServico.ValorSemAdicionais);

                $('input[name={key}]'.replace("{key}", key)).value(value);
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
