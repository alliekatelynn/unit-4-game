$(document).ready(function () {

    var counter = 0;

    var randomComp = Math.floor(Math.random() * 120) + 19;

    var imageCrystal = $("#crystal-image");

    var wins = 0;
    $("#winsTotal").html("Wins: " + wins);

    var losses = 0;
    $("#lossesTotal").html("Losses: " + losses);

    $("#randomNum").text("Match this: " + randomComp);

    $("#crystal-image").on("click", function () {
        var crystalValue = Math.floor(Math.random() * 12) + 1;
        counter += crystalValue;
        $("#total").text("Total: " + counter);
    });

    if (counter === randomComp) {
        wins += 1;
        counter = 0;
    }

    else {
        losses += 1;
        counter = 0;
    }
 
});