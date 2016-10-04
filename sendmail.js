// Contact form
	var form = $('.main-contact-form');
	form.submit(function(event){
	var formData = $(event.target).serialize();
	event.preventDefault();
	var form_status = $(event.target).closest('.main-contact-form').find('.form_status');
		$.ajax({
			type: "POST",
			data: formData,
			url: $(this).attr('action'),
			beforeSend: function(){
				$(event.target).closest('.main-contact-form').prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i>Отправка заявки ...</p>').fadeIn() );
				}
			}).done(function(data){
				form_status.html('<p class="text-success">Ваша заявка оформленна. Наш менеджер свяжется с вами в ближайшее время.</p>').delay(3000).fadeOut();
			});
	});

