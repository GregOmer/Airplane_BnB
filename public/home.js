$(document).ready(function() {
// $.ajax({
//           url: '/airplane_db/signup',
//           type: 'POST',
//           data: {
//             first_name: $('#first_name').val(),
//             email: $('#email').val(),
//             hashed_pw: $('#hashed_pw').val()
//           },
//           dataType: 'json'
//         })
//         .done((data) => {
//           localStorage.setItem('userLogin', JSON.stringify({
//             id: data.id,
//             name: data.first_name
//           }))
//           window.location.href = './home.html'
//         })
//
// knex.raw(
//   `SELECT ap_zip FROM airports;`


  // if(inputField1.data === ap_zip){
  //   ap_result = document.createElement('div');
  //   ap_result.classname = 'airport_result';
  //   body.appendChild(ap_result);
  // }
// )


$("#zipButton" ).click(function() {
  let zip = $('.inputField1').val()
  console.log(zip, "zip")
  $.get("localhost:3000/stuff/airports/ap_zip", function(data, status){
      console.log("Data: " + data);
  });

});




// EXAMPLE APPEND
// for(let i = 0; i < 900; i++){
//   loopDiv = document.createElement("section");
//   loopDiv.className = "pixel";
//   wrapper.appendChild(loopDiv);
// };

});
