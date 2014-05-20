// $( "#toggleweight" ).click(function() {
//   $( "p" ).fadeIn( 3200 );
// });




// $( "#toggleweight" ).click(function() {
//   var set =Math.floor((Math.random()* $('p').length )+1);
//   $.ajax({success:function(result){
//     $( "#foo").unbind( "click" );
//     $( "p:nth-child(" + set+ ")" ).fadeIn( 3200 );
//     }});
// });


$( "#toggleweight" ).click(function() {
  var set =Math.floor((Math.random()* $('p').length )+1);
$.ajax({success:function(result){
        // $( "#foo").unbind( "click" );
            // onComplete code goes here
            $( "p:nth-child(" + set+ ")" ).fadeIn( 2800 );
              $("p").fadeOut(8000, function(){
             });
          }
    });
})

 // if(navigator.geolocation) {
 //    browserSupportFlag = true;
 //    navigator.geolocation.getCurrentPosition(function(position) {
 //      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
 //      map.setCenter(initialLocation);
 //    }, function() {
 //      handleNoGeolocation(browserSupportFlag);
 //    });
 //  }