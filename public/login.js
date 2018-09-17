$(document).ready(function() {
let createUser = (req, res, next) => {
  console.log(req.body);
  return knex('users')
    .insert({
      "first_name": req.body.first_name,
      "email": req.body.email,
      "hashed_pw": req.body.hashed_pw
    })
    .returning('*')
    .then((data) => {
      console.log("login.js line 12 datatatatata", data);
      res.json(data[0])
    })
    .catch((err) => {
      console.log("ERRRRRROR", err);
      res.send(err)
    })
}




}):
