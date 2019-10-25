
//$(document).ready(function () {

//    $('#limpar').click(function () {
//        ClearScreen();
//    });



//});


$("#consultar").click(function () {

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

            $('#resultadoValor').val("R$ " + data.cServico.Valor);
        $('#resultadoPrazo').val(data.cServico.PrazoEntrega + " dia(s)");
        $('#resultadoSemAdicionais').val("R$ " + data.cServico.ValorSemAdicionais);
        //$('#resultadoEmMaos').val(data.cServico.EntregaDomiciliar);




        //alert(" Valor Final" + data.cServico.Valor
        //    + "\n\rPrazo Entrega " + data.cServico.PrazoEntrega
        //    + "\n\rValor Sem Adicionais " + data.cServico.ValorSemAdicionais
        //);
    });

    $('#limpar').click(function () {
        ClearScreen();
    });

});

function ClearScreen() {
    var myInputs = $('input[type="text"]');
    myInputs.val("");
}
