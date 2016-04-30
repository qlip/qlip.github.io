

  // Contact form
    var form = $('#main-contact-form');
    form.submit(function(event){
    var formData = $(form).serialize();
    event.preventDefault();
      var form_status = $('<div class="form_status"></div>');
      $.ajax({
        type: "POST",
        data: formData,
        url: $(this).attr('action'),
        beforeSend: function(){
          form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
          }
        }).done(function(data){
          form_status.html('<p class="text-success">Спасибо за заявку! Мы свяжемся с вами в ближайшее время.</p>').delay(3000).fadeOut();
        });
    });
  
