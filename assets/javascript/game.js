var randomResult; 
var lost;


let playerScore = 0;
let playerWins= 0;


randomResult = Math.floor(Math.random() * 99);

var total = 0;
$('#random').html(randomResult);
for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12);

    $('#image' + (i + 1)).attr({ 
        "data-random" : random
    });
    
}

for(var i = 0; i < 4; i++) {
    

$('#image' + (i + 1)).on('click', function () {

var numStr = $(this).attr('data-random');
var num = parseInt(numStr);
total = total + num;
$('.total').text("Your Total Score Is: " + total);


if (total > randomResult) {
    console.log("LOSE");
    playerScore += 1;
    $('#losses').text("Losses:" + playerScore)
}

if (total == randomResult) {
    console.log("WIN");
    playerWins += 1;
    $('#wins').text("Wins:" + playerWins)
}

console.log(total);
console.log(randomResult);


});

}

 