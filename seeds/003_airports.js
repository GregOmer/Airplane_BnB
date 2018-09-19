exports.seed = function(knex, Promise) {
  return knex('airports').del()
    .then(function() {
      return knex('airports').insert([{
          id: 1,
          ap_name: 'Vance Brand Municipal Airport',
          ap_zip: 80503,
          ap_state: 'CO',
          coordinates: '40°09′51″N 105°09′49″W',
          runway_length: '4800ft',
          runway_orientation: '11/29',
          elevation: '5055ft',
          ap_photo: './VanceBrand.jpg',
          number_hangars: 273
        },
        {
          id: 2,
          ap_name: 'Boulder Municipal Airport',
          ap_zip: 80301,
          ap_state: 'CO',
          coordinates: '40°02′22″N 105°13′33″W',
          runway_length: '4100ft',
          runway_orientation: '8/26',
          elevation: '5288ft',
          ap_photo: './BoulderMuni.jpg',
          number_hangars: 115
        },
        {
          id: 3,
          ap_name: 'Rocky Mountain Metropolitan Airport',
          ap_zip: 80301,
          ap_state: 'CO',
          coordinates: '40°02′22″N 105°13′33″W',
          runway_length: '9000ft',
          runway_orientation: '12/30',
          elevation: '5288ft',
          ap_photo: './BoulderMuni.jpg',
          number_hangars: 115
        }
      ])
    })

        .then(() => {
  return knex.raw(
    `SELECT setval('airports_id_seq', (SELECT MAX(id) FROM airports));`
  )
})
}
