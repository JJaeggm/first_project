'use strict';

// iframe과 메시지 교환하기

const iWindow = document.querySelector('#card-payment').contentWindow;

document.querySelector('#checkout-btn')
.addEventListener('click', e => {
  iWindow.location = 'payment.html';
});

window.addEventListener('message', e => {
  if (e.data.holderName) console.log(e.data)
});