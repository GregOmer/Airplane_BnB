const knex = require('../knex')

function getOneAirportZip(req, res, next) {
  console.log(req.body);
  knex('airports')
    .where('ap_zip', req.body.ap_zip)

    // .first()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log("GET ONE zip ERRRRRROR", err);
      res.send(err)
    })
}

module.exports = {getOneAirportZip};
