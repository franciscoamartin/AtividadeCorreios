
$('#ceporigem').mask("00000-000");
$('#cepdestino').mask("00000-000");

$(document).ready(function () {

    $('#limpar').click(function () {
        ClearScreen();
    });



});


$("#consultar").click(function () {

    var params = {
        'nCdEmpresa': '',
        'sDsSenha': '',
        'sCepOrigem': $('#ceporigem').val(),
        'sCepDestino': $('#cepdestino').val(),
        'nVlPeso': $('#peso').val(),
        'nCdFormato': $("#formatoencomenda :selected").val(),
        'nVlComprimento': $('#comprimento').val(),
        'nVlAltura': $('#altura').val(),
        'nVlLargura': $('#largura').val(),
        'nVlDiametro': $('#diametro').val(),
        'sCdMaoPropria': $("#entregamao :selected").val(),
        'nVlValorDeclarado': $('#valordeclarado').val(),
        'sCdAvisoRecebimento': $("#avisorecebimento :selected").val(),
        'StrRetorno': 'xml',
        'nCdServico': $("#selectservico :selected").val(),
    };

    var url = 'https://usysweb.com.br/api/correiosambev.php';

    var options = {
        'uri': url,
        'method': 'GET',
        'qs': params
    };

    $.getJSON(options.uri, options.qs, function (data) {
        //debugger

        $('#resultadoValor').val("R$ " + data.cServico.Valor);
        $('#resultadoPrazo').val(data.cServico.PrazoEntrega + " dia(s)");
        $('#resultadoSemAdicionais').val("R$ " + data.cServico.ValorSemAdicionais);
        $('#resultadoEmMaos').val(data.cServico.EntregaDomiciliar);




        //alert(" Valor Final" + data.cServico.Valor
        //    + "\n\rPrazo Entrega " + data.cServico.PrazoEntrega
        //    + "\n\rValor Sem Adicionais " + data.cServico.ValorSemAdicionais
        //);
    });

});


function ClearScreen() {
    var myInputs = $('input[type="text"]');
    myInputs.val("");
}




