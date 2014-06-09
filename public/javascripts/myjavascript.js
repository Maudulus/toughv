$( "#toggleweight" ).click(function() {
  var set =Math.floor((Math.random()* $('p').length )+1);
$.ajax({success:function(result){
            $( "p:nth-child(" + set+ ")" ).fadeIn( 2800 );
              $("p").fadeOut(8000, function(){
             });
          }
    });
})
