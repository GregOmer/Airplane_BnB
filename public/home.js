$(document).ready(function() {


$("#zipButton" ).click(function() {
  let zip = $('.inputField1').val()
  let zipBar = $('#zipBar')


  // $.post("/stuff/airports/ap_zip", zip, function(data, status){
  //     console.log("Data: ",  data);
  // });
  $.post( "/stuff/airports/ap_zip", {ap_zip: zip})
  .done(function( data ) {
    console.log( "Data: ", data[0]);
    zipBar.append ( `<br/><div class="portResult row">
    <img class="imgResult" src="${data[0].ap_photo}"/>
    <div class="font resultText">
    <h5>${data[0].ap_name}</h5><br/>
    Coordinates: ${data[0].coordinates}<br/>
    Elevation: ${data[0].elevation}<br/>
    Runway Length: ${data[0].runway_length}<br/>
    Runway Orientation: ${data[0].runway_orientation}<br/>
    Hangar Count: ${data[0].number_hangars}<br/>
    <br/>
    <button id="cartButton" class="btn waves-effect waves-light" align="center" type="submit" name="action" href="cart.html">

    <a href="./cart.html">Book Hangar</a>
    </button>
    </div>
    </div>` )
  });
  console.log("zip ",zip)
});

});
