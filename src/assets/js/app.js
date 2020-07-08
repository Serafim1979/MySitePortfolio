$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "contact-form.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Сообщение отправлено.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});