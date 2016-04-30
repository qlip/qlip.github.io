
  /***************** Waypoints ******************/

$(document).ready(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
   $('.wp8').waypoint(function() {
    $('.wp8').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInDown');
  }, {
    offset: '55%'
  });
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });
    $('.wp7').waypoint(function() {
    $('.wp7').addClass('animated fadeInRight');
  }, {
    offset: '75%'
  });

});

      $( function() {        
        $( '#cbp-qtrotator' ).cbpQTRotator();
      } );

  $(function(){
    $('#Grid').mixitup();
});

$('.parallax-back').stellar();
$('.header-parallax').stellar();


    $(function(){

      $.stellar({

        horizontalScrolling: false,

        verticalOffset: 40

      });

    });

/*	Fixed main menu

	================================================== */ 



	$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

	scrollIntervalID = setInterval(stickIt, 10);



	function stickIt() {



	  var orgElementPos = $('.original').offset();

	  orgElementTop = orgElementPos.top;               



	  if ($(window).scrollTop() >= (orgElementTop)) {

	    // scrolled past the original position; now only show the cloned, sticky element.



	    // Cloned element should always have same left position and width as original element.     

	    orgElement = $('.original');

	    coordsOrgElement = orgElement.offset();

	    leftOrgElement = coordsOrgElement.left;  

	    widthOrgElement = orgElement.css('width');

	    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();

	    $('.original').css('visibility','hidden');

	  } else {

	    // not scrolled past the menu; only show the original menu.

	    $('.cloned').hide();

	    $('.original').css('visibility','visible');

	  }

	}

function setEqualHeight(columns)
{
var tallestcolumn = 0;
columns.each(
function()
{
currentHeight = $(this).height();
if(currentHeight > tallestcolumn)
{
tallestcolumn = currentHeight;
}
}
);
columns.height(tallestcolumn);
}
$(document).ready(function() {
setEqualHeight($(".container > div"));
});