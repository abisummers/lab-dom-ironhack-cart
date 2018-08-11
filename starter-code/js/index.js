function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice(container) {
  var unitPrice = container.querySelector(".unit-price");
  var quantity = container.querySelector(".quantity");
  var totalPrice = container.querySelector(".totalPrice");

  var total = unitPrice.innerHTML * quantity.value;
  totalPrice.innerHTML = total;
  return total;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

//window.onload = function(){
//var calculatePriceButton = document.getElementById("calc-prices-button");
// var createItemButton = document.getElementById('new-item-create');
//var deleteButtons = document.getElementsByClassName('btn-delete');

//calculatePriceButton.onclick = getTotalPrice;
//createItemButton.onclick = createNewItem;

// for(var i = 0; i<deleteButtons.length ; i++){
//   deleteButtons[i].onclick = deleteItem;
// }
//};

document.querySelector("#calc-prices-button").addEventListener("click", evt => {
  var containers = document.querySelectorAll(".flex");
  var total = 0;

  containers.forEach(function(container) {
    var result = getTotalPrice(container);
    total += result;
  });
  document.querySelector(".total").innerHTML = total;
});
