$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
	//prevent it to applying to other elements
	event.stopPropagation();
	//fade out li
	$(this).parent().fadeOut(500, function() {
		//delete the li the span is a part of	
		$(this).remove();
	})	
});

$('input[type="text"]').keypress(function(event) {
	if (event.which === 13) {
		//create a variable with string inside the input field
		var todoText = $(this).val();
		//add this text to the bottom of the list as a new li
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
		//clear the text in the input field
		$(this).val("");
	}
})

$(".fa-plus").click(function(){
	$('input[type="text"]').fadeToggle();
})