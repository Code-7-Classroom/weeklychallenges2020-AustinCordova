var Person = function(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
}
Person.prototype.exercise = function exercise(){
    return console.log(' Exercising is fun!!! ');
}
Person.prototype.fetchJob = function fetchJob(){
    return console.log(`${this.name} is a ${this.job}`);
};
var Programmer = function(name, job, age, languages){
    Person.call(this, name, job, age);
    this.language = [languages];
    this.busy = true;
}
Programmer.prototype.completeTask = function(){
    this.busy = false;
}
Programmer.prototype.acceptNewtask = function(){
    this.busy = true;
}
Programmer.prototype.offerNewtask = function(){
    if(this.busy){
        console.log(`${this.name} can not accept any new tasks right now.`);
    }else{
        console.log(`${this.name} would love to take on a new responsibility.`);
    }
}
Programmer.prototype.learnLanguage = function(){
    return console.log(this.language)
}
Programmer.prototype.listLanguage = function(program){
    return this.language.push(program);
}
var myName = new Person(`${this.name} Front-end developer`, 20);
console.log(myName.fetchJob());
var newName = new Programmer(' Esteban ', ' student ', 20);
console.log(new Programmer);
newName.listLanguage();
newName.learnLanguage('javaScript');
newName.listLanguage();
newName.offerNewtask();



