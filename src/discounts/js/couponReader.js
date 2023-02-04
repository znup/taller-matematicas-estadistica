const couponReader = () => {
  const inputCouponValue = couponId.value;

  const couponValue = coupons.map((item) => {
    // console.log(item.coupon);
    if (item.coupon === inputCouponValue) {
      return item.discount;
    }
  });
  let strWithoutComma = couponValue.join('');
  const match = couponValue.filter((item) => item !== undefined);
  const inputPrice = parseFloat(price.value);
  const couponCalculate = (inputPrice * (100 - match)) / 100;

  if (match.length > 0) {
    console.log('Hay match', match[0]);
    console.log({ couponCalculate });
    Pcoupon.innerHTML = `
      <div class="table--content">
        <p>Cupon utilizado</p>
        <p>${!inputCouponValue == '' ? inputCouponValue : '0'}</p>
      </div>`;
    Pdiscount.innerHTML = `
      <div class="table--content">
        <p>Descuento</p>
        <p>${!strWithoutComma == '' ? strWithoutComma : '0'}%</p>
      </div>`;
    resultDiscount.innerHTML = `
      <div class="table--content">
        <p>Precio Total</p>
        <p>$${!couponCalculate == '' ? couponCalculate : '0'}</p>
      </div>`;
    console.log(parseFloat(couponValue));
  } else {
    console.log('no hay match');
  }
  console.log(inputCouponValue);
};

couponId.addEventListener('input', couponReader);
