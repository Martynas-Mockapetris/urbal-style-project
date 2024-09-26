var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 600);

    $('body').animate({
      left: "285px"
    }, 600);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 600);

    $('body').animate({
      left: "0px"
    }, 600);
  });
};


$(document).ready(main);