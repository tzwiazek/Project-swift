(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = new ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 1300,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '100px'
    }, 300);
   if ($(window).width() < 992) {
      sr.reveal('.sr-left', {
           duration: 1600,
           delay: 200,
           origin: 'left',
           distance: '0px'
       }, 300);
      sr.reveal('.sr-right', {
           duration: 1600,
           delay: 200,
           origin: 'right',
           distance: '0px', 
       }, 300);
      sr.reveal('.sr-right2', {
           duration: 1600,
           delay: 200,
           origin: 'right',
           distance: '0px'
       }, 300);
      sr.reveal('.sr-right-text', {
           duration: 1600,
           delay: 600,
           origin: 'right',
           distance: '00px', 
       }, 300);
         sr.reveal('.sr-right-text2', {
           duration: 1600,
           delay: 600,
           origin: 'right',
           distance: '00px', 
       }, 300);
   }
   else {
      sr.reveal('.sr-left', {
           duration: 1600,
           delay: 200,
           origin: 'left',
           distance: '300px'
       }, 300);
      sr.reveal('.sr-right', {
           duration: 1600,
           delay: 200,
           origin: 'right',
           distance: '300px', 
       }, 300);
      sr.reveal('.sr-right2', {
           duration: 1600,
           delay: 200,
           origin: 'right',
           distance: '300px'
       }, 300);
      sr.reveal('.sr-right-text', {
           duration: 1600,
           delay: 800,
           origin: 'right',
           distance: '70px', 
       }, 100);
         sr.reveal('.sr-right-text2', {
           duration: 1600,
           delay: 800,
           origin: 'right',
           distance: '70px', 
       }, 100);
      sr.reveal('.sr-left-text', {
           duration: 1600,
           delay: 800,
           origin: 'left',
           distance: '70px'
       }, 100);
   }
})(jQuery); // End of use strict



   
/* Łopatologicznie zrobione ale działa */
   var str = "<p><span style='color:blue'>func</span> hasAnyMatches(list: <span style='color:blue'>[Int]</span>, condition: <span style='color:blue'>(Int)</span> -> Bool {<br /><span style='color:blue;margin-left:34px;'>for</span> item <span style='color:blue'>in</span> list {<br /> <span style='color:blue;margin-left:60px;'>if</span> condition(item) {<br /> <span style='margin-left:80px;'>return</span> <span style='color:blue'>true</span><br /> <span style='margin-left:60px;'>}</span><br /><span style='margin-left:34px;'>}</span><br /><span style='margin-left:34px;'>return</span> <span style='color:blue'> false</span><br />}<br /><span style='color:blue'>func</span> lessThenTen(number: <span style='color:blue'>Int</span>) -> <span style='color:blue'> Bool</span> {<br /><span style='color:blue;margin-left:34px''>return</span> number < <span style='color:blue'>10</span><br />}</p>";
   var i = 0;
   var isTag;
   var text;

   function terminal() {
      text = str.slice(0, ++i);
      if (text === str) return;

      document.getElementById('typewriter').innerHTML = text;

      var char = text.slice(-1);
      if( char === '<' ) isTag = true;
      if( char === '>' ) isTag = false;

      if (isTag) return terminal();
      setTimeout(terminal, 120);
   }
   
   
   function clear_terminal() {
      document.getElementById('typewriter').innerHTML = "";
   }
   
   
   var str2 = "<p><span style='color:blue'>var</span> c = Spiral(R: <span style='color:blue'>7</span>,<br /><span style='margin-left:66px;'>radius:</span> <span style='color:blue'>3</span>,<br /><span style='margin-left:99px;'>d:</span> <span style='color:blue'>4</span>)<br /><br />c.circleBackgroundColor = UIColor.white()<span style='margin-left:-8px;'> .</span>withAlphaComponent(<span style='color:blue'>0.2</span>)<br />c.lineWidth = <span style='color:blue'>1.0</span><br />c.style = .normal<br/>c.inside = <span style='color:blue'>true</span><br />c.showOldValues = <span style='color:blue'> true</span><br />c.timeGranularity = <span style='color:blue'>0.05</span><br />c.clockwise = <span style='color:blue'>false</span></p>";
   var e = 0;
   var isTag2;
   var text2;

   var terminal2 = function () {
      text2 = str2.slice(0, ++e);
      if (text2 === str2) return;

      document.getElementById('typewriter').innerHTML = text2;

      var char2 = text2.slice(-1);
      if( char2 === '<' ) isTag2 = true;
      if( char2 === '>' ) isTag2 = false;

      if (isTag2) return terminal2();
      setTimeout(terminal2, 120);
   }
/* koniec wykopalisk */

function empty() {};

$(function() {
   var stop; // undefined variable used to stop function
   var oTop = $('#terminal').offset().top - window.innerHeight; // position of id in pixels
   $(window).scroll(function(){
      if (stop == undefined) { // can be called only once
         var pTop = $(window).scrollTop(); // actual position
         //console.log( pTop + ' - ' + oTop ); 
         if( pTop > oTop ){
            start_typewriter(); 
            stop = 1;
         }
      }
   }); 
});

function start_typewriter(){
   start_count = empty;
   terminal();
   setTimeout(clear_terminal, 35000);
   setTimeout(terminal2, 36000);
}