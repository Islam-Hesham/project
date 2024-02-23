
$(".input-bordered").find("input").on('focus', function () {
  $(this).parent(".input-bordered").addClass("active")
});
$(".input-bordered").find("input").on('blur', function () {
  if ($(this).val().length == 0) {
    $(this).parent(".input-bordered").removeClass("active")
  }
});

$("form").on('submit', function (e) {
  e.preventDefault();
  var $this = $(this);
  $(this).parents(".signUp").find(".left").addClass("close");
  $(this).parents(".signUp").addClass("close");
  setTimeout(function () {
    $($this).parents(".signUp").css("opacity", "0")
  }, 1000);
});

$(".back").on('mousemove', function (e) {

  var X = e.pageX - $(this).offset().left - $(this).outerWidth() / 2,
    Y = e.pageY - $(this).offset().top - $(this).outerHeight() / 2,
    xSet = X / 60,
    ySet = Y / 60;

  $(this).css("background-position", " " + xSet + "px " + ySet + "px ");


});