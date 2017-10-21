
$(document).ready(function(){
  var speed=500;
  var autoSwitch=true;
  var autoSpeed=3000;
 $('.slide').hide();
 $('.slide').first().addClass('active');
 $('.active').show();

 $('#next').on('click',nextSlide);

 $('#prev').on('click',prevSlide);

if(autoSwitch){
  setInterval(nextSlide,autoSpeed);
}


function nextSlide(){
  $('.active').removeClass('active').addClass('lastActive');
  if($('.lastActive').is(':last-child')){
    $('.slide').first().addClass('active');
  }else{
    $('.lastActive').next().addClass('active');
  }
  $('.lastActive').removeClass('lastActive');
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
}

function prevSlide(){
  $('.active').removeClass('active').addClass('prevActive');
  if($('.prevActive').is(':first-child')){
    $('.slide').last().addClass('active');
  }else{
    $('.prevActive').prev().addClass('active')
  }
  $('.prevActive').removeClass('prevActive');
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
}

})
