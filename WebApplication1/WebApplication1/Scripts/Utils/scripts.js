
$('#ceporigem').mask("00000-000");
$('#cepdestino').mask("00000-000");

$(document).ready(function () {

    $('#limpar').click(function () {
        ClearScreen();
    });

});


function ClearScreen() {
    var myInputs = $('input[type="text"]');
    myInputs.val("");
}

function calcWsCorreios() {
    var sendjson = {
        "nCdEmpresa": "",
        "sDsSenha": "",
        "sCepOrigem": "37540000",
        "sCepDestino": "37540000",
        "nVlPeso": "1",
        "nCdFormato": "1",
        "nVlComprimento": "20",
        "nVlAltura": "5",
        "nVlLargura": "15",
        "sCdMaoPropria": "s",
        "nVlValorDeclarado": "200",
        "sCdAvisoRecebimento": "s",
        "nCdServico": "41106",
        "nVlDiametro": "0", 
        "StrRetorno": "xml",
        "nIndicaCalculo" : 3
    }


    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "http://usysweb.com.br/api/correiosambev.php?",
        data: sendjson,
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (data, err) {

            console.log(data);
            console.log(err);
        },
    });

}

$(document).ready(function () {
    $('#teste').click(function () {
        // calcWsCorreios();
        $("body").append('<div id=result>Clickou</div>');


        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: "http://usysweb.com.br/api/correiosambev.php?",
            data: sendjson,
            dataType: "json",
            jsonpCallback: "foo"
            , error: function (err) { alert(err); }
            , success: 'foo'
        }).success(function (s) {
            console.log('Successo', s);
        }).done(function (done) {
            console.log('Done', done);
        });

        function foo(resultado) {
            // verifique que resultado é JSON válido
            alert(resultado);
            console.log('porra');
        }
    });//click
});// ready