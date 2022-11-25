// validation
const eid = document.querySelector("#id");
const describe = document.querySelector("#Description");
const quantity = document.querySelector("#quantity");
const form = document.querySelector("#signup");
const cost = document.querySelector("#cost");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isItemDescriptionValid = checkDecription(),
    isEidValid = checkEid(),
    isQuantityValid = checkQuantity(),
    iscostValid = checkCost();
  let isFormValid =
    isItemDescriptionValid && isEidValid && isQuantityValid && iscostValid;
  if (isFormValid) {
    onFormSubmit();
  }
});

function checkDecription() {
  let valid = false;
  const item = describe.value.trim();
  if (!isRequired(item)) {
    showError(describe, "Item is not described");
  } else {
    showSuccess(describe);
    valid = true;
  }
  return valid;
}

let isRequired = (value) => (value === "" ? false : true);

let showError = (input, message) => {
  let formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  formField.querySelector("small").textContent = "";
};

function checkCost() {
  let valid = false;
  const employeecost = cost.value.trim();
  if (!isRequired(employeecost)) {
    showError(cost, "Employee cost cannot be blank.");
  } else {
    showSuccess(cost);
    valid = true;
  }
  return valid;
}

function checkEid() {
  let valid = false;
  const employeeid = eid.value.trim();
  if (!isRequired(employeeid)) {
    showError(eid, "Inventory ID cannot be blank.");
  } else if (!isEidValid(employeeid)) {
    showError(eid, `Inventory ID can only be numbers`);
  } else {
    showSuccess(eid);
    valid = true;
  }
  return valid;
}

const isEidValid = (number) => {
  const re = /^([0-9])+$/;
  return re.test(number);
};

function checkQuantity() {
  let valid = false;
  const employeephoneno = quantity.value.trim();
  if (!isRequired(employeephoneno)) {
    showError(quantity, "Requires Quantity");
  } else if (!isEidValid(employeephoneno)) {
    showError(quantity, `Quantity can only be numbers`);
  } else {
    showSuccess(quantity);
    valid = true;
  }
  return valid;
}

// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window)
  .on("load resize ", function () {
    var scrollWidth =
      $(".tbl-content").width() - $(".tbl-content table").width();
    $(".tbl-header").css({ "padding-right": scrollWidth });
  })
  .resize();

//To Enter the data in the table

function onFormSubmit() {
  var formData = readFormData();
  insertNewRecord(formData);
  resetForm();
}

function readFormData() {
  var formData = {};

  formData["id"] = document.getElementById("id").value;
  formData["Description"] = document.getElementById("Description").value;
  formData["quantity"] = document.getElementById("quantity").value;
  formData["address"] = document.getElementById("address").value;
  formData["cost"] = document.getElementById("cost").value;

  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("stdList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.id;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.Description;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.address;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.quantity;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.cost;
}

function resetForm() {
  document.getElementById("id").value = "";
  document.getElementById("Description").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("address").value = "";
  document.getElementById("cost").value = "";
}
