var el = document.querySelector(".product--card");
console.log('.product--card');
  document.querySelector('.product--card');
  const selectElement = document.querySelector('.products');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});