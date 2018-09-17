$(document).ready(function() {


$("#zipButton" ).click(function() {
  let zip = $('.inputField1').val()
  console.log(zip, "zip")
  // $.post("/stuff/airports/ap_zip", zip, function(data, status){
  //     console.log("Data: ",  data);
  // });
  $.post( "/stuff/airports/ap_zip", {ap_zip: zip})
  .done(function( data ) {
    console.log( "Data: ", data[0].ap_photo);
  });

});

});
