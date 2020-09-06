
$(document).ready( () => {
    $("#btn-rand-go").click( () => {
        var min = parseInt($("#tb-rand-min").val(), 10);
        var max = parseInt($("#tb-rand-max").val(), 10);
        if(isNaN(min) || isNaN(max) || min > max ) {
            $("#tb-rand-result").append(">> Wrong Input!!!<br />");
            $('#div-result').scrollTop($('#div-result')[0].scrollHeight);
        } else {
            var value = Math.floor(Math.random() * (max - min + 1) ) + min;
            $("#tb-rand-result").append(">> " + value + "<br />");
            $('#div-result').scrollTop($('#div-result')[0].scrollHeight);
        }
        
    })

    $("#btn-rand-hex").click( () => {
        console.log("Trigger");
        
        var length = parseInt($("#tb-rand-length").val(), 10);
        if(isNaN(length) || length < 1) {
            $("#tb-rand-result-hex").append(">> Wrong Input!!!<br />");
            $('#div-result-hex').scrollTop($('#div-result-hex')[0].scrollHeight);
        } else {
            var str = "";
            for (let index = 0; index < length; index++) {
                let hexVal = Math.floor(Math.random() * 17 );
                let hexChar = hexVal.toString(16).toUpperCase();
                str = str + hexChar;
            }
            $("#tb-rand-result-hex").append(">> " + str + "<br />");
            $('#div-result-hex').scrollTop($('#div-result-hex')[0].scrollHeight);
        }
    })
})
