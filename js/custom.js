$(function(){
      $(".intro").typed({
            stringsElement: $('#string0'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            showCursor: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); }
      });

      $(".reset").click(function(){
          $("#typed").typed('reset');
      });
  });

function foo(){
  $(".second").typed({
        stringsElement: $('#string1'),
        typeSpeed: 50,
        backDelay: 500,
        showCursor: false,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ boo(); }
  });
}

function boo(){
  $(".others").typed({
        stringsElement: $('#string2'),
        typeSpeed: 10,
        backDelay: 500,
        showCursor: false,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ koo(); }
  });
}
function koo(){
  $(".contact").typed({
        stringsElement: $('#string3'),
        typeSpeed: -500,
        backDelay: 500,
        showCursor: false,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false
  });
}
