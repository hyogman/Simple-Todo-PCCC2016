// Check off specific Todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// click on x to delete todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
  if(event.which === 13) {
    // grab new todo text from input
    var todoText = $(this).val();
    // clear input
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li><span>X</span> " + todoText + "</li>");

  }
});
