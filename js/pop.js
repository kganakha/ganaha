jQuery(function($){
    $('#slide').slideDown(800);
});

jQuery(function($){

$('.menu-switch').click(function(){
  $(this).toggleClass('open');
  $(this).next('.menu-contents').slideToggle();
  
});
});