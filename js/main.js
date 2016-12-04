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


//jQuery for page scrolling feature 
$(document).ready(function() {
  $('a[href^="#"]').click(function(){
          var el = $(this).attr('href');
          $('body').animate({
              scrollTop: $(el).offset().top}, 500);
          return false; 
  });
});


//Slider
$(document).ready(function() {
  $("#owl-demo").owlCarousel({
 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay : 5000,
      navigation: true,
      navigationText:  ["<img src='img/left-arrow.png'>","<img src='img/right-arrow.png'>"]
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
});

$(document).ready(function() {
  $("#owl-small").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      theme: "owl-theme",
      autoPlay : 5000,
      navigation: true,
      navigationText:  ["<img src='img/left-arrow-grey.png'>","<img src='img/right-arrow-grey.png'>"]
 
  });
});

// Material inputs type in main Form
$(".mat-input").focus(function(){
  $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})

$('.menu-icon-toggle').on('click', function(e) {
  $('body').toggleClass('open');

  e.preventDefault();
});


