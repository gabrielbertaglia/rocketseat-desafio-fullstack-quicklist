const form = document.querySelector('form')
const inputNewItem = document.getElementById('product-item')

const listProduct = document.getElementById('product')

const alertBanner = document.getElementsByClassName("alert")[0];
if (alertBanner) showAlert(alertBanner);

document.querySelectorAll(".product > img[src='./assets/icons/delete.svg']").forEach(removeProduct);

function showAlert(element) {
  const closeImg = element.querySelector("img[src*=x]");
  closeImg.addEventListener("click", (event) => {
    event.target.closest(".alert").classList.add("show-alert");
  });
}

const bins = document.querySelectorAll(".product > img[src='./assets/icons/delete.svg']");

function removeProduct(element) {
  element.addEventListener("click", (event) => {
    alertBanner.classList.remove("show-alert");
    event.target.closest("div#product").remove();
  });
}

form.onsubmit = (event) => {
  event.preventDefault()
  console.log(inputNewItem.value)
  const listProducts = document.getElementById('products')

  console.log('oxe, cai aqui ?', listProducts)

  const productDiv = document.createElement("div");
  const productCheckbox = document.createElement("input");
  const productSpan = document.createElement("span");
  const productDeleteImg = document.createElement("img");

  productDiv.setAttribute("class", "product")
  productDiv.setAttribute("id", "product")

  productCheckbox.setAttribute("type", "checkbox")
  productDiv.append(productCheckbox);

  productSpan.textContent = inputNewItem.value
  productDiv.append(productSpan);

  productDeleteImg.setAttribute("src", "./assets/icons/delete.svg")
  productDeleteImg.setAttribute("alt", "deletar item");
  productDiv.append(productDeleteImg);

  listProducts.prepend(productDiv);
  removeProduct(productDeleteImg);

  inputNewItem.value = ''
}