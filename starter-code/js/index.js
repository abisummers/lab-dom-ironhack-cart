function getTotalPrice(container) {
  var unitPrice = container.querySelector(".unit-price");
  var quantity = container.querySelector(".quantity");
  var totalPrice = container.querySelector(".totalPrice");

  var total = unitPrice.innerHTML * quantity.value;
  totalPrice.innerHTML = total;
  return total;
}

document.querySelector("#calc-prices-button").addEventListener("click", evt => {
  var containers = document.querySelectorAll(".container");
  var total = 0;

  containers.forEach(function(container) {
    var result = getTotalPrice(container);
    total += result;
  });
  document.querySelector(".total").innerHTML = total;
});

function deleteClick(evt) {
  var container = evt.target.parentNode.parentNode;
  container.parentNode.removeChild(container);
}

document.querySelectorAll(".btn-delete").forEach(function(button) {
  button.addEventListener("click", deleteClick);
});

function createDOM(name, price) {
  var container = document.createElement("div");
  container.className = "flex container";

  var productDiv = document.createElement("div");
  var product = document.createElement("span");
  product.innerText = name;
  productDiv.appendChild(product);

  var priceDiv = document.createElement("div");
  var unitPrice = document.createElement("span");
  unitPrice.className = "unit-price";
  unitPrice.innerText = price;
  var dollar = document.createTextNode("$");
  priceDiv.appendChild(unitPrice);
  priceDiv.appendChild(dollar);

  var quantityDiv = document.createElement("div");
  var quantityL = document.createElement("label");
  quantityL.innerText = "QTY";
  var quantityI = document.createElement("input");
  quantityI.type = "number";
  quantityI.className = "quantity";
  quantityDiv.appendChild(quantityL);
  quantityDiv.appendChild(quantityI);

  var totalDiv = document.createElement("div");
  var total = document.createElement("span");
  total.className = "totalPrice";
  var label = document.createTextNode("TOTAL PRICE");
  var dollar = document.createTextNode("$");
  totalDiv.appendChild(label);
  totalDiv.appendChild(total);
  totalDiv.appendChild(dollar);

  var deleteDiv = document.createElement("div");
  var deleteButton = document.createElement("button");
  deleteButton.innerText = "DELETE BUTTON";
  deleteButton.className = "btn-delete";
  deleteButton.addEventListener("click", deleteClick);
  deleteDiv.appendChild(deleteButton);

  container.appendChild(productDiv);
  container.appendChild(priceDiv);
  container.appendChild(quantityDiv);
  container.appendChild(totalDiv);
  container.appendChild(deleteDiv);
  return container;
}

document.querySelector("#create-item").addEventListener("click", evt => {
  var name = document.querySelector("#item-name").value;
  var price = document.querySelector("#item-price").value;

  document.querySelector("#concon").appendChild(createDOM(name, price));
  document.querySelector("#item-name").value = "";
  document.querySelector("#item-price").value = 0;
});
