let button1 = document.querySelector('.red--button');
let button2 = document.querySelector('.white--button');

button1.addEventListener('click', () => {
    updateTheBackground('red');
});
button2.addEventListener('click', () => {
    updateTheBackground('white');
});
window.updateTheBackground =  function(className) {
    document.body.classList = className;
}


