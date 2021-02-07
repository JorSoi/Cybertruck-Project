window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
      document.getElementById("scroll-nav").style.top = "0";
    } else {
      document.getElementById("scroll-nav").style.top = "-50px";
    }
  } 