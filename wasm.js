import init, {calculator, hex_to_dec, dec_to_hex} from "./math/pkg/math.js"

async function run (){
    await init();

    $(document).ready( () => {
        $("#btn-calc").click( () => {
            var expression = $("#tb-input").val();
            var number = calculator(expression, "");
            $("#tb-result").append(">>" + expression + " = " + number + "<br />");
        })
        
        $("#btn-hex2dec").click( () => {
            
            var numberHex = $("#tb-input-hex").val();
            console.log("GET:" + numberHex);
            var number = hex_to_dec(numberHex);
            $("#tb-result-hex").append(">>" + numberHex + " = " + number + "<br />");
        })

        $("#btn-dec2hex").click( () => {
            var numberDecString = $("#tb-input-dec").val();
            var number = dec_to_hex(numberDecString);
            $("#tb-result-dec").append(">>" + numberDecString + " = " + number + "<br />");
        })
    });
}

run()