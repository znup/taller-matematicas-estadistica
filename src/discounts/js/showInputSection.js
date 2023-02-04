const toggleButton = document.querySelector('#toggleButton');
const showInputSection = () => {
  const couponSection = document.querySelector('#couponSection');
  const toggleButton = document.querySelector('#toggleButton');
  if (couponSection.style.display === 'none') {
    couponSection.style.display = 'block';
    toggleButton.innerText = 'Ocultar seccion del cupon';
  } else {
    couponSection.style.display = 'none';
    toggleButton.innerText = 'Dame un clic para cambiar tu cupon!!!';
  }
};
toggleButton.addEventListener('click', showInputSection);
