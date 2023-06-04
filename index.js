for (var i = 0; i < document.querySelectorAll(".acho").length; i++) {

    document.querySelectorAll(".acho")[i].addEventListener("click", function () {
        var data = './sounds/chord-' + this.innerHTML + '.wav';
        var aud = new Audio(data);
        aud.play();

    })
}
document.addEventListener("keypress", function (event) {
    if(event.key === "K" || event.key === "k"){
        var datakeys = './sounds/chord-Em.wav';
        var aud = new Audio(datakeys);
        aud.play();
    }
    else{
        var datakeys = './sounds/chord-' + event.key + '.wav';
        var aud = new Audio(datakeys);
        aud.play();
    }
})