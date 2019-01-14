function calc() {
    var voertuig = document.getElementByName("voertuigen")[0].value;
    if (voertuig.value == "kiesVoertuig") {
        console.log("Please select a card type");
    }
}