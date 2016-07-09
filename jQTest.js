/* jQuery ДЛЯ ТЕСТА!!!*/

$(function () {
   function checkRadBox () {
      var score;
      score = 0;
      if ($("#linkTeg1").is(":checked")) {
         score = score + 1;
      }
      if ($("#listTeg3").is(":checked")) {
         score = score + 1;
      }
      if ($("#infoServiceTeg4").is(":checked")) {
         score = score + 1;
      }
      if ($("#tebleTeg2").is(":checked") && $("#tebleTeg4").is(":checked") && !$("#tebleTeg1").is(":checked") && !$("#tebleTeg3").is(":checked")) {
         score = score + 1;
      }
      if ($("#formAtr1").is(":checked") && $("#formAtr2").is(":checked") && !$("#formAtr3").is(":checked") && !$("#formAtr3").is(":checked")) {
         score = score + 1;
      }
      alert("Вы набрали " + score + " баллов и " + score * 20 + " процентов верных ответов");
      
      // Обнуляем все выбранные счетчики (точки и галочки) НАЧАЛО
      if ($("input:checked")) {
         $("input").removeAttr("checked");
      }
      // Обнуляем все выбранные счетчики (точки и галочки) КОНЕЦ
   }

   $("#bottonTest").on("click", function () {checkRadBox ();});
});