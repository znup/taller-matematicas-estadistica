const price = document.querySelector('#price');
const discount = document.querySelector('#discount');
const resultDiscount = document.querySelector('#resultDiscount');
const emptyValue = document.querySelector('#emptyValue');
const Pprice = document.querySelector('#Pprice');
const Pdiscount = document.querySelector('#Pdiscount');
const couponId = document.querySelector('#couponId');

const calculateDiscount = () => {
  const inputPrice = parseFloat(price.value);
  const inputDiscount = parseFloat(discount.value);

  if (inputPrice <= 0 || inputPrice == '') {
    emptyValue.innerHTML =
      '<p class="message">Ingrese el precio y el descuento(no mayor a 100%) en los campos correspondientes 😊</p>';
    return;
  }
  if (inputDiscount > 100) {
    emptyValue.innerHTML =
      '<p class="message">Ingrese el precio y el descuento(no mayor a 100%) en los campos correspondientes 😊</p>';
    return;
  }

  const calculate = (inputPrice * (100 - inputDiscount)) / 100;
  Pprice.innerHTML = `
      <div class="table--content">
        <p>Precio</p>
        <p>$${!inputPrice == '' ? inputPrice : '0'}</p>
      </div>`;
  Pdiscount.innerHTML = `
      <div class="table--content">
        <p>Descuento</p>
        <p>${!inputDiscount == '' ? inputDiscount : '0'}%</p>
      </div>`;
  resultDiscount.innerHTML = `
      <div class="table--content">
        <p>Precio Total</p>
        <p>$${!calculate == '' ? calculate : '0'}</p>
      </div>`;
};

price.addEventListener('input', calculateDiscount);
discount.addEventListener('input', calculateDiscount);
