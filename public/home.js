$(document).ready(function() {




$("#zipButton" ).click(function() {
  let zip = $('.inputField1').val()
  let zipBar = $('#zipBar')



  $.post( "/stuff/airports/ap_zip", {ap_zip: zip})
  .done(function( data ) {
    console.log( "Data: ", data[0]);
    localStorage.setItem('AP Name', data[0].ap_name)
    zipBar.prepend ( `<br/><div class="portResult row">
    <img class="imgResult" src="${data[0].ap_photo}"/>
    <div class="font resultText">
    <h5>${data[0].ap_name}</h5><br/>
    Serves:  ${data[0].serves}<br/>
    Coordinates:  ${data[0].coordinates}<br/>
    Elevation:  ${data[0].elevation}<br/>
    Runway Length:  ${data[0].runway_length}<br/>
    Runway Orientation:  ${data[0].runway_orientation}<br/>
    Runway Type:  ${data[0].runway_type}<br/>
    Hangar Count:  ${data[0].number_hangars}<br/>
    Hangar Amenities:  ${data[0].hang_amenity}<br/>

    <br/>
    <button id="cartButton" class="btn waves-effect waves-light" align="center" type="submit" name="action" href="cart.html">
    <a href="./cart.html">Book Hangar</a>
    </button>
    </div>
    </div>` )
  });
  console.log("zip ",zip)
});

let booking = document.getElementById('booking')



let port = localStorage.getItem('AP Name');
portName = document.createElement('h2');
portName.className = 'portt';
portName.innerText = "Booking for: " + port;
booking.appendChild(portName);




});
