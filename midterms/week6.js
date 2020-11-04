var name;
name = "Alice";
var nationality = "Korean";
var age = 21;

printInfo();
//alert("ALERT!");
//confirm("CONFIRM!");
//prompt("PROMPT!");
//alert(sum());
//alert (sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
function printInfo() {
  document.write(name + nationality + age);
}

function sum() {
  var number1 = prompt("number1");
  var number2 = prompt("number2");
  return Number(number1) + Number(number2);
}
function sumAll(a, b, c) {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function btnClicked() {
  alert("버튼을 클릭하였습니다.");
}

var element = document.getElementById("myBtn");
element.onclick = function () {
  alert("myBtn has been clicked");
};
element.onmouseover = function () {
  alert("myBtn has been hovered");
};
element.addEventListener("click", function () {
  alert("does this work?");
});

function newOpen() {
  newWin = window.open("week4.html", "", "width = 1000, height = 1500");
}
function windowMove() {
  var xdist = document.getElementById("setX");
  var ydist = document.getElementById("setY");
  newWin.moveBy(xdist.value, ydist.value);
  newWin.focus();
}

var colorVal;

function backColor() {
  colorValue = document.getElementById("colorVal");
  Document.bgColor = colorVal.value;
}
function textColor() {
  colorValue = document.getElementById("colorVal");
  Document.fgColor = colorVal.value;
}
function changeTitle() {
  var docValue = document.getElementById("titleValue");
  document.title = docValue.value;
}
function printInfo() {
  var docInfo =    "last modified date+document.lastModified" +   "\n\n" +   "current URL:" +document.URL +
    "\n\n" +    "document title: " +    document.title +    "\n\n";
  alert(docInfo);
}
function register() {
  document.test.submit();
  alert("회원 가입을 축하합니다.");
}
function reWrite() {
  document.test.reset();
  alert("다시 입력하세요.");
}

