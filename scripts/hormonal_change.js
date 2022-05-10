// HORMONAL CHANGE
hormones.forEach(hormone => hormone.addEventListener('input', event => {
// anytime a hormone axis updates

var Stringcocktail = String(cocktail).split("");

// Change the value of the hormone in the cocktail
switch(hormone.id) {
    case 's_eveil':
    Stringcocktail[0] = o_eveil.innerHTML = hormone.value;
    break;
    case 's_satisfaction':
    Stringcocktail[1] = o_propension.innerHTML = hormone.value;
    break;
    case 's_propension':
    Stringcocktail[2] = o_satisfaction.innerHTML = hormone.value;
    break;
}
cocktail = parseInt(Stringcocktail.join(""));
cocktail_to_emotion();
move_cursor();
}));