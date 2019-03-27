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

var bind = function(target){
  $(target).on('click',function(){
    $(this).toggleClass('is-bind')
  })
}

new bind($('.bind'))

var fade = function(target){
  $(target).on('click',function(){
    $(this).toggleClass('is-fade')
  })
}

new fade($('.fade'))

var drop = function(target){
  $(target).on('click',function(){
    $(this).toggleClass('is-drop')
  })
}

new drop($('.drop'))
