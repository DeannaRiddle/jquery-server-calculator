$(document).ready(init);

function init() {
  $('.js-btn-sign-Add').on('click', applySign);
  $('.js-btn-sign-Subtract').on('click', applySign);
  $('.js-btn-sign-Multiply').on('click', applySign);
  $('.js-btn-sign-Divide').on('click', applySign);
  $(".js-btn-Equal").on('click', applyCalculation);
  $(".js-btn-Clear").on('click', clearInputs);
};

function calc() {
  var num1, num2;
  var sign = ".js-btn-sign";
  var result;

  function getNum1() {
    num1 = document.getElementById("num1").value;
    return Number(num1);
  }
  function getNum2() {
    num1 = document.getElementById("num2").value;
    return Number(num2);
  }
  function getSign() {
    sign = document.getElementById("sign").value;
    return sign;
  }
  function seeResults() {
    document.getElementById("result").value = result;
  }
  function applyCalculation() {
    var num1 = getNum1();
    var num2 = getNum2();
    var sign = ".js-btn-sign";

    if (getSign() == "*") {
      result = num1 * num2;
    } else if (getSign == "/") {
      result = num1 / num2;
    } else if (getSign == "-") {
      result = num1 - num2;
    } else {
      result = {num1 + num2};
    }
    seeResults();
  }
  applyCalculation();

function clearInputs() {
  $(this)
  .parent()
  .addClass('delete');
}
}
