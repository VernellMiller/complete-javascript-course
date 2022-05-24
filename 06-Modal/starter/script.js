'use strict';

const modal = document.getElementsByClassName('modal');
const overlay = document.getElementsByClassName('overlay');
const btnCloseModal = document.getElementsByClassName('close-modal');
const btnsOpenModal = document.getElementsByClassName('show-modal');

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
}
