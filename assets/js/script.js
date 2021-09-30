//page animation js here
AOS.init();

// Toggle Animation by Class
$(window).scroll(function(){
    if($(document).scrollTop() > 60){
      $('nav').addClass('animate');
    }else{
      $('nav').removeClass('animate');
    }
  })

/* anomation of galaxy js start here */
// randomize stars;
var randSize, randX, randY;
var wrapper = $('.galaxy-wrapper');
var stars = $('.stars');

function placeStar() {
  $('.star').remove();  
    for (var i = 0; i < 200; i++) {
    randSize = Math.floor(Math.random() * 5);
    randX = Math.floor(Math.random() * $(window).width());
    randY = Math.floor(Math.random() * $(window).height());
      var star = '<span class="star" style="width:' + randSize + 'px;height:' + randSize + 'px;top:' + randY + 'px;left:' + randX + 'px;animation: blink ' + randSize + 's infinite;"></span>';

    wrapper.append(star);
    // stars.append(star);
  }
}

placeStar();

$(window).resize(function() {
  placeStar();
});

// Galaxy js start here 

