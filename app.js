var c = confirm('lets pay a game');

if (c == true) {
    var age = prompt ('enter your age');
} else {
    alert ('then see next time');
}

if (age >= 35) {
    document.write ('group1');
} else if (age < 35) {
    document.write ('group2');
} else {
    document.write ('pleas enter a number');
}
