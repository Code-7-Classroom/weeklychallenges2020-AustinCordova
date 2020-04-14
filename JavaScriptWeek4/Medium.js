var target = prompt('Enter a number');

function returnIndex(array, target){
    for(var i = 0; i <= array.length; i++){
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(returnIndex([4, 5, 6, 7, 0, 1, 2], parseInt(target, 10)));