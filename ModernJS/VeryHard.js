const input1 = (string) => {
    for(let i = 0; i < string.length; i++){
        let a = string.charAt(i)

        if(string.indexOf(a) == string.lastIndexOf(a)){
            return a;
        }
    }
}
console.log(input1('The quick brown fox jumps over the calm kitten quietly'));

const input2 = (string) => {
    for(let i = 0; i < string.length; i++){
        let a = string.charAt(i)

        if(string.indexOf(a) == string.lastIndexOf(a)){
            return a;
        }
    }
}
console.log(input2('This hat is the greatest!'));

const input3 = (string) => {
    for(let i = 0; i < string.length; i++){
        let a = string.charAt(i)

        if(string.indexOf(a) == string.lastIndexOf(a)){
            return a;
        }
    }
}
console.log(input3('What a wonderful day it has been!'));