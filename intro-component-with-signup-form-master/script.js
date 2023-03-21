"use strict";

const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll("input");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  for (const [index, input] of inputs.entries()) {
    let errMsg;
    switch (index) {
      case 0:
        errMsg = "First Name cannot be empty ";
        break;
      case 1:
        errMsg = "Last Name cannot be empty ";
        break;
      case 2:
        errMsg = "looks like this is not an email";
        break;
      case 3:
        errMsg = "Password cannot be empty";
        break;
      default:
        break;
    }
    if (!input.checkValidity()) {
      input.classList.add("input-err");
      let errElement = document.createElement("p");
      errElement.textContent = errMsg;
      errElement.classList.add("input-err-msg");
      input.parentNode.appendChild(errElement);
    }
  }
  let check = true;
  for (const input of inputs) {
    if (!input.checkValidity()) {
      check = false;
    }
  }
  if (check) {
    for (const input of inputs) {
      input.value = "";
    }
  }
});
