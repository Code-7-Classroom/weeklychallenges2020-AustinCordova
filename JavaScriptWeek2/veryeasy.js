var x = parseInt(prompt("Please enter a number: "));
 var y = parseInt(prompt("Please enter another number: "));
 function min(){
     if(x < y){
        console.log(x + ' is less than ' + y);
     } else if(x > y){
         console.log(y + ' is less than ' + x);
     }
     else {
        console.log('They are the same values');
     }
}
min();