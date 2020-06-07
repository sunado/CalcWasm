import init, {calculator} from "./math/pkg/math.js"

async function run (){
    await init();

    $(document).ready( () => {
        $("#btn-calc").click( () => {
            var expression = $("#tb-input").val();
            var number = calculator(expression, "");
            $("#tb-result").append(">>" + expression + " = " + number + "<br />");
        })
    });
}

run()