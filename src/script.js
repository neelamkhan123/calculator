$(function () {
  $(".btn").button();
  $("#equal").button();

  $(".btn").on("click", function () {
    $("#display").val($("#display").val() + $(this).val());
  });

  $("#clear").on("click", function () {
    $("#display").val(" ");
  });

  $("#equal").on("click", function () {
    $("#display").val(eval($("#display").val()));
  });
});
