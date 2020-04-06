function getName(){
    return function(){
        var pii = {
            firstName: 'Austin',
            lastName: 'Cordova',
            ssn: 111-11-1111,
        };
        return pii.name;
    }
}
var onlyGetname = getName();
console.log(onlyGetname());