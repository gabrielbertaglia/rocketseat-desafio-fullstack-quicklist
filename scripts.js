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
    event.target.closest("li#product").remove();
  });
}

form.onsubmit = (event) => {
  event.preventDefault()
  console.log(inputNewItem.value)
  const listProducts = document.getElementById('products')

  console.log('oxe, cai aqui ?', listProducts)

  const productLi = document.createElement("li");
  const productCheckbox = document.createElement("input");
  const productSpan = document.createElement("span");
  const productDeleteImg = document.createElement("img");

  productLi.setAttribute("class", "product")
  productLi.setAttribute("id", "product")

  productCheckbox.setAttribute("type", "checkbox")
  productLi.append(productCheckbox);

  productSpan.textContent = inputNewItem.value
  productLi.append(productSpan);

  productDeleteImg.setAttribute("src", "./assets/icons/delete.svg")
  productDeleteImg.setAttribute("alt", "deletar item");
  productLi.append(productDeleteImg);

  listProducts.prepend(productLi);
  removeProduct(productDeleteImg);

  inputNewItem.value = ''
}