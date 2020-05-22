function log(message) {
  console.log(message);
}

function getElem(elem_string) {
  let elem = document.querySelector(elem_string);
  return elem;
}

function getElemAll(elem_string) {
  let elems = document.querySelectorAll(elem_string);
  return elems;
}

function createElem(elem){
  let elemt = document.createElement(elem);
  return elemt;
}