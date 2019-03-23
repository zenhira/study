var accordion = function(base) {
  var $base = $(base);
  var $trigger = $base.find('.accordion_header');

  $trigger.on('click',function(){
    console.log('click')
    if($base.hasClass('is-open')){
      console.log('remove open')
      $base.removeClass('is-open')
    } else {
      console.log('add open')
      $base.addClass('is-open')
    }
  });

}


$('.accordion').each(function(){
  new accordion(this)
});
