// validation
const eid = document.querySelector("#id");
const emailE1 = document.querySelector("#email");
const ename = document.querySelector("#name");
const phoneno = document.querySelector("#phone");
const form = document.querySelector("#signup");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isEnameValid = checkEname(),
    isEidValid = checkEid(),
    isEmailValid = checkEmail(),
    isphonenoValid = checkPhoneno();
  let isFormValid =
    isEnameValid && isEmailValid && isEidValid && isphonenoValid;

  if (isFormValid) {
  }
});

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
