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
					form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i>Отправка заявки ...</p>').fadeIn() );
					}
				}).done(function(data){
					form_status.html('<p class="text-success">Ваша заявка оформленна. Наш менеджер свяжется с вами в ближайшее время.</p>').delay(3000).fadeOut();
				});
		});
		
		

// jQuery for page scrolling feature 
	$(function() {
		$(document).on("scroll", onScroll);
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top - $('.navbar').height()
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - $('.navbar').height() <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu ul a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
