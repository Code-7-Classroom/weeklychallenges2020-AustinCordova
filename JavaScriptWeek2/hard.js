var tomHeight = 9;
var jerryHeight = 10;
var tomMass = 8;
var jerryMass = 45;
var tomBmi = imperialBmi (tomHeight, tomMass);
var jerryBmi = metricBmi (jerryHeight, jerryMass);
var Boolean = (tomBmi > jerryBmi);

function imperialBmi(tomHeight, tomMass){
    return 703 * (tomMass / (tomHeight * tomHeight))
}
console.log(' Toms BMI is ' + tomBmi);

function metricBmi(jerryHeight, jerryMass){
    return jerryMass / (jerryHeight * jerryHeight);
}
console.log(' Jerrys BMI is ' + jerryBmi);
 if (tomBmi > jerryBmi){
     console.log(' Is Toms BMI higher than Jerrys? ' + Boolean)
 }