import init, {calculator, hex_to_dec, dec_to_hex, bin_to_dec, dec_to_bin} from "./math/pkg/math.js"

async function run (){
    await init();

    $(document).ready( () => {
        $("#btn-calc").click( () => {
            var expression = $("#tb-input").val();
            var number = calculator(expression, "");
            $("#tb-result").append(">>" + expression + " = " + number + "<br />");
            $('#div-result').scrollTop($('#div-result')[0].scrollHeight);
        })
        
        $("#btn-hex2dec").click( () => {
            
            var numberHex = $("#tb-input-hex").val();
            //console.log("GET:" + numberHex);
            var number = hex_to_dec(numberHex);
            $("#tb-result-hex").append(">>" + numberHex + " = " + number + "<br />");
            $('#div-result-hex').scrollTop($('#div-result-hex')[0].scrollHeight);
        })

        $("#btn-dec2hex").click( () => {
            var numberDecString = $("#tb-input-dec").val();
            var number = dec_to_hex(numberDecString);
            $("#tb-result-dec").append(">>" + numberDecString + " = " + number + "<br />");
            $('#div-result-dec').scrollTop($('#div-result-dec')[0].scrollHeight);
        })

        $("#btn-bin2dec").click( () => {
            
            var numberHex = $("#tb-input-bin2dec").val();
            //console.log("GET:" + numberHex);
            var number = bin_to_dec(numberHex);
            $("#tb-result-bin2dec").append(">>" + numberHex + " = " + number + "<br />");
            $('#div-result-bin2dec').scrollTop($('#div-result-bin2dec')[0].scrollHeight);
        })

        $("#btn-dec2bin").click( () => {
            var numberDecString = $("#tb-input-dec2bin").val();
            var number = dec_to_bin(numberDecString);
            $("#tb-result-dec2bin").append(">>" + numberDecString + " = " + number + "<br />");
            $('#div-result-dec2bin').scrollTop($('#div-result-dec2bin')[0].scrollHeight);
        })

    });
}

run()