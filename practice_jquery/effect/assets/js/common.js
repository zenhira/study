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
