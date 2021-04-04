// alert ('Hello');
// var c = confirm('lets play a game');

// if (c == true) {
//     var age = prompt ('enter your age');
// } else {
//     alert ('then, see next time');
// }

// if (age >= 35) {
//     document.write ('group1');
// } else if (age < 35) {
//     document.write ('group2');
// } else {
//     document.write ('please enter a number');
// }


var robotTest = prompt ('Please enter 5 to make sure you are not a robot');
while (robotTest !== '5') {
    robotTest = prompt ('Please enter 5 ');
}


function printImages () {
for (var A=1; A<3; A++) {
    document.write ('<img style="width: 500px;" src="https://assets.materialup.com/uploads/9993c23c-53db-4ff3-8b0c-aad9d001edf3/preview.png" />');
    document.write (A);
}
var userInput = prompt ('please enter the number of a blank pages that you need');
for (var B=1 ; B <= userInput ; B++) {
    document.write ('<img style="width: 300px;" src="https://i.pinimg.com/originals/d3/38/77/d338774cd740e03069eff6a2f94e1f4a.png" />');
    document.write (B);
   }
}

printImages ();