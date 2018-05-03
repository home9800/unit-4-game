var randomResult; 
var lost;
var win;




randomResult = Math.floor(Math.random() * 99); //It will not link with the html

var total = 0;
$('#random').html(randomResult);
for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12);
    // console.log(random);
    $('#image' + (i + 1)).attr({ 
        "data-random" : random
    });
    
}

for(var i = 0; i < 4; i++) {
    

$('#image' + (i + 1)).on('click', function () {

var numStr = $(this).attr('data-random');
var num = parseInt(numStr);
total = total + num;
$('.total').text("This is the Total: " + total);



if (total > randomResult) {
    console.log("LOSE");
}

console.log(total);
console.log(randomResult);


});

}

 