/* jQuery ДЛЯ КАЛЬКУЛЯТОРА!!!*/

$(function () {
   var firstDigit;
   var operations;
   var rezult = $("#result");

   // Обработчики кнопок-цифр от 0 до 9 и "." (клацаешь мышкой по кнопке-цифре, она появляется в соответствующем окошке) НАЧАЛО
   // Функция вывода на экран в окошке результата цифры соответствующей кнопке-цифре
   function inputDigits(digit) {
      rezult.val(rezult.val() + digit);
   }
   // Функции кликанья на соотвнтствующей кнопке-цифре от 0 до 9 и "." 
   var digit7 = $("#btnSeven");
   digit7.click(function () {
      inputDigits(7);
   });
   var digit8 = $("#btnEight");
   digit8.click(function () {
      inputDigits(8);
   });
   var digit9 = $("#btnNine");
   digit9.click(function () {
      inputDigits(9);
   });
   var digit4 = $("#btnFour");
   digit4.click(function () {
      inputDigits(4);
   });
   var digit5 = $("#btnFive");
   digit5.click(function () {
      inputDigits(5);
   });
   var digit6 = $("#btnSix");
   digit6.click(function () {
      inputDigits(6);
   });
   var digit1 = $("#btnOne");
   digit1.click(function () {
      inputDigits(1);
   });
   var digit2 = $("#btnTwo");
   digit2.click(function () {
      inputDigits(2);
   });
   var digit3 = $("#btnThree");
   digit3.click(function () {
      inputDigits(3);
   });
   var digit0 = $("#btnZero");
   digit0.click(function () {
      inputDigits(0);
   });
   var digitPoint = $("#btnPoint");
   digitPoint.click(function () {
      // Логический оператор, проверяющий чтобы в окне ввода/результатов вводилась только одна точка "." при нажатии на соответстующую кнопку
      if (rezult.val().indexOf(".") === -1) {
         inputDigits(".");
      }
   });
   // Обработчики кнопок-цифр от 0 до 9 и "." КОНЕЦ
   
   // Обработчик деления "/" НАЧАЛО
   var btnDivide = $("#btnDivide");
   btnDivide.click(function () {
      firstDigit = rezult.val();
      rezult.val("");
      operations = "/";
   });

   // Обработчик умножения "*" НАЧАЛО
   var btnMultiply = $("#btnMultiply");
   btnMultiply.click(function () {
      firstDigit = rezult.val();
      rezult.val("");
      operations = "*";
   });

   // Обработчик минуса "-" НАЧАЛО
   var btnMin = $("#btnMin");
   btnMin.click(function () {
      firstDigit = rezult.val();
      rezult.val("");
      operations = "-";
   });

   //Обработчик плюса "+" НАЧАЛО
   var btnPlus = $("#btnPlus");
   btnPlus.click(function () {
      firstDigit = rezult.val();
      rezult.val("");
      operations = "+";
   });

   // Обработчик плюс-минус "+/-" НАЧАЛО
   var btnPlsMin = $("#btnPlsMin");
   btnPlsMin.click(function () {
      rezult.val(rezult.val() * -1);
   });

   // Обработчик равно "=" НАЧАЛО
   /* Тут сделано обработчик 2 способами: через switch и через if else. Оба РАБОТАЮТ, причем одинаково. Коментю switch просто потому, что if else мне как-то понятнее.*/

   /* var btnEquals = $("#btnEquals");
   btnEquals.click(function () {
      switch (operations) {
         case "/":
            switch (true) {
               case rezult.val() != 0:
                  rezult.val(+firstDigit / +rezult.val());
                  break;
               case rezult.val() == 0:
                  alert("НА 0 ДЕЛИТЬ НЕЛЬЗЯ, БРАТИШ!");
                  break;
            };
            break;
         case "*":
            rezult.val(+firstDigit * +rezult.val());
            break;
         case "-":
            rezult.val(+firstDigit - +rezult.val());
            break;
         case "+":
            rezult.val(+firstDigit + +rezult.val());
            break;
      }
   }); */

   var btnEquals = $("#btnEquals");
   btnEquals.click(function () {
      if (operations == "/" && rezult.val() != 0) {
         rezult.val(+firstDigit / +rezult.val());
      } else if (operations == "/" && rezult.val() == 0) {
         alert("НА 0 ДЕЛИТЬ НЕЛЬЗЯ, БРАТИШ! (Умножать можно, даже если ты !=Гена:) )");
      } else if (operations == "*") {
         rezult.val(+firstDigit * +rezult.val());
      } else if (operations == "-") {
         rezult.val(+firstDigit - +rezult.val());
      } else if (operations == "+") {
         rezult.val(+firstDigit + +rezult.val());
      } 
   });
   
});

// ОБЯЗАТЕЛЬНО спросить у Макса, как избавиться от неточностей (напр., 1,1 + 2,2 = 3,30000000000004)








/* КОПИЯ исходного JAVACRIPT ДЛЯ КАЛЬКУЛЯТОРА!!!*/
/*
var firstDigit;
var operations;
var rezult = document.getElementById("result");

// Обработчики кнопок-цифр от 0 до 9 и "." (клацаешь мышкой по кнопке-цифре, она появляется в соответствующем окошке) НАЧАЛО
// Функция вывода на экран в окошке результата цифры соответствующей кнопке-цифре
function inputDigits(digit) {
   rezult.value = rezult.value + digit;
}
// Функции кликанья на соотвнтствующей кнопке-цифре о 0 до 9 и "." 
var digit7 = document.getElementById("btnSeven");
digit7.onclick = function () {
   inputDigits(7);
}
var digit8 = document.getElementById("btnEight");
digit8.onclick = function () {
   inputDigits(8);
}
var digit9 = document.getElementById("btnNine");
digit9.onclick = function () {
   inputDigits(9);
}
var digit4 = document.getElementById("btnFour");
digit4.onclick = function () {
   inputDigits(4);
}
var digit5 = document.getElementById("btnFive");
digit5.onclick = function () {
   inputDigits(5);
}
var digit6 = document.getElementById("btnSix");
digit6.onclick = function () {
   inputDigits(6);
}
var digit1 = document.getElementById("btnOne");
digit1.onclick = function () {
   inputDigits(1);
}
var digit2 = document.getElementById("btnTwo");
digit2.onclick = function () {
   inputDigits(2);
}
var digit3 = document.getElementById("btnThree");
digit3.onclick = function () {
   inputDigits(3);
}
var digit0 = document.getElementById("btnZero");
digit0.onclick = function () {
   inputDigits(0);
}
var digitPoint = document.getElementById("btnPoint");
digitPoint.onclick = function () {
   if (rezult.value.indexOf(".") === -1) {
      inputDigits(".")
   }
}
// Обработчики кнопок-цифр от 0 до 9 и "." КОНЕЦ

// Обработчик деления "/" НАЧАЛО
var btnDivide = document.getElementById("btnDivide");
btnDivide.onclick = function () {
   firstDigit = rezult.value;
   rezult.value = "";
   operations = "/";
}

// Обработчик умножения "*" НАЧАЛО
var btnMultiply = document.getElementById("btnMultiply");
btnMultiply.onclick = function () {
   firstDigit = rezult.value;
   rezult.value = "";
   operations = "*";
}

// Обработчик минуса "-" НАЧАЛО
var btnMin = document.getElementById("btnMin");
btnMin.onclick = function () {
   firstDigit = rezult.value;
   rezult.value = "";
   operations = "-";
}

// Обработчик плюса "+" НАЧАЛО
var btnPlus = document.getElementById("btnPlus");
btnPlus.onclick = function () {
   firstDigit = rezult.value;
   rezult.value = "";
   operations = "+";
}

// Обработчик плюс-минус "+/-" НАЧАЛО
var btnPlsMin = document.getElementById("btnPlsMin");
btnPlsMin.onclick = function () {
   rezult.value = rezult.value * -1;
}

// Обработчик равно "=" НАЧАЛО
/* Тут сделано обработчик 2 способами: через switch и через if else. Оба РАБОТАЮТ, причем одинаково. Коментю switch просто потому, что if else мне как-то понятнее.*/

/*var btnEquals = document.getElementById("btnEquals");
btnEquals.onclick = function () {
   switch (operations) {
      case "/":
         switch (true) {
            case rezult.value != 0:
               rezult.value = +firstDigit / +rezult.value;
               break;
            case rezult.value == 0:
               alert("На 0 делить нельзя!");
               break;
         };
         break;
      case "*":
         rezult.value = +firstDigit * +rezult.value;
         break;
      case "-":
         rezult.value = +firstDigit - +rezult.value;
         break;
      case "+":
         rezult.value = +firstDigit + +rezult.value;
         break;
   }
} */

/*var btnEquals = document.getElementById("btnEquals");
btnEquals.onclick = function () {
   if (operations == "/" && rezult.value != 0) {
      rezult.value = +firstDigit / +rezult.value;
   } else if (operations == "/" && rezult.value == 0){
      alert("На 0 делить нельзя!");
   } else if (operations == "*") {
      rezult.value = +firstDigit * +rezult.value;
   } else if (operations == "-") {
      rezult.value = +firstDigit - +rezult.value;
   } else if (operations == "+") {
      rezult.value = +firstDigit + +rezult.value;
   } 
}

// ОБЯЗАТЕЛЬНО спросить у Макса, как избавиться от неточностей (напр., 1,1 + 2,2 = 3,30000000000004)
*/