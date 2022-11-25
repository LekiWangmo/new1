// validation
const eid = document.querySelector("#id");
const emailE1 = document.querySelector("#email");
const ename = document.querySelector("#name");
const phoneno = document.querySelector("#phone");
const form = document.querySelector("#signup");
const position = document.querySelector("#position");
const address = document.querySelector("#address");
const gender = document.querySelector("#sex");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isEnameValid = checkEname(),
    isEmailValid = checkEmail(),
    isEidValid = checkEid(),
    isphonenoValid = checkPhoneno(),
    // isSexOrGenderValid = checkSex(),
    isaddressValid = checkAddress();
  // ispositionValid = checkPosition();
  let isFormValid =
    isEnameValid &&
    isEmailValid &&
    isEidValid &&
    isphonenoValid &&
    isaddressValid;
  // isSexOrGenderValid;
  // ispositionValid;

  if (isFormValid) {
    onFormSubmit();
    clearRadio();
    changeSelect();
    // resetForm();
  }
});
function changeSelect() {
  document.getElementById("position").value = document
    .getElementById("position")
    .getElementsByTagName("option")[0].value;
}

function clearRadio() {
  var a = [];
  a = document.getElementsByTagName("input");
  for (var b = 0; b < a.length; b++) {
    if (a[b].type == "radio") {
      a[b].checked = false;
    }
  }
}

function checkEname() {
  let valid = false;
  const min = 3,
    max = 25;
  const emname = ename.value.trim();
  if (!isRequired(emname)) {
    showError(ename, "name cannot be blank.");
  } else if (!isBetween(emname.length, min, max)) {
    showError(ename, `name must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(ename);
    valid = true;
  }
  return valid;
}

let isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

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

let isPositionRequired = (value) => (value === "Default" ? false : true);

function checkAddress() {
  let valid = false;
  const employeeAddress = address.value.trim();
  if (!isRequired(employeeAddress)) {
    showError(address, "Employee Address cannot be blank.");
  } else {
    showSuccess(address);
    valid = true;
  }
  return valid;
}

function checkEid() {
  let valid = false;
  const employeeid = eid.value.trim();
  if (!isRequired(employeeid)) {
    showError(eid, "Employee ID cannot be blank.");
  } else if (!isEidValid(employeeid)) {
    showError(eid, `Employee ID can only be numbers`);
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

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

function checkEmail() {
  let valid = false;
  const email = emailE1.value.trim();
  if (!isRequired(email)) {
    showError(emailE1, " Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailE1, `Email is not valid`);
  } else {
    showSuccess(emailE1);
    valid = true;
  }
  return valid;
}

function checkPhoneno() {
  let valid = false;
  const employeephoneno = phoneno.value.trim();
  if (!isRequired(employeephoneno)) {
    showError(phoneno, "Employee phone number cannot be blank.");
  } else if (!isEidValid(employeephoneno)) {
    showError(phoneno, `Employee Phone number can only be numbers`);
  } else {
    showSuccess(phoneno);
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
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  formData["phone"] = document.getElementById("phone").value;
  formData["position"] = document.getElementById("position").value;
  formData["address"] = document.getElementById("address").value;
  formData["sex"] = document.getElementById("sex").value;

  return formData;
}

function myFunction(browser) {
  document.getElementById("sex").value = browser;
}
function insertNewRecord(data) {
  var table = document
    .getElementById("stdList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.id;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.name;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.phone;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.position;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.address;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.sex;
}

function resetForm() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("position").value = "";
  document.getElementById("address").value = "";
  document.getElementById("sex").value = "Unknown";
}
