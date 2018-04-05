const input = document.querySelector('#my-input');

input.disabled = true;
input.disabled = false;
input.focus();
input.value = "new value";

let value = input.value;
