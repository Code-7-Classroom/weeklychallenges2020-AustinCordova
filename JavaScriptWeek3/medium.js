var sharePizza = 2;
var sharePizza2 = 3;
var cutPizzaSlices = 8;

function pizzaSlices(sharePizza) {
    function sharePizza(cutPizzaSlices) {
        if (sharePizza <= cutPizzaSlices) {
            return cutPizzaSlices / sharePizza;
        } else if (sharePizza2 <= cutPizzaSlices) {
            return cutPizzaSlices / sharePizza2;
        } else {
            return false;
        }

    }
}
pizzaSlices();
console.log('Each pesrson gets ' + cutPizzaSlices / sharePizza + ' slices of pizza');
console.log('Each person gets ' + cutPizzaSlices / sharePizza2 + ' slices of pizza');



