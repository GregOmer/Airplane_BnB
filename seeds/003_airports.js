exports.seed = function(knex, Promise) {
  return knex('airports').del()
    .then(function() {
      return knex('airports').insert([{
          id: 1,
          ap_name: 'Vance Brand Municipal Airport',
          serves: 'Longmont, Colorado',
          ap_zip: 80503,
          ap_state: 'CO',
          coordinates: '40°09′51″N 105°09′49″W',
          runway_length: '4800ft',
          runway_orientation: '11/29',
          runway_type: 'Concrete',
          elevation: '5055ft',
          ap_photo: './img/VanceBrand.jpg',
          number_hangars: 273,
          hang_amenity: 'Heat, Potable Water'
        },
        {
          id: 2,
          ap_name: 'Boulder Municipal Airport',
          serves: 'Boulder, Colorado',
          ap_zip: 80301,
          ap_state: 'CO',
          coordinates: '40°02′22″N 105°13′33″W',
          runway_length: '4100ft',
          runway_orientation: '8/26',
          runway_type: 'Asphalt',
          elevation: '5288ft',
          ap_photo: './img/BoulderMuni.jpg',
          number_hangars: 115,
          hang_amenity: 'Potable Water'
        },
        {
          id: 3,
          ap_name: 'Rocky Mountain Metropolitan Airport',
          serves: 'Broomfield, Colorado',
          ap_zip: 80021,
          ap_state: 'CO',
          coordinates: '39°54′32″N 105°07′02″W',
          runway_length: '9000ft',
          runway_orientation: '12/30',
          runway_type: 'Asphalt',
          elevation: '5673ft',
          ap_photo: './img/Jeffco4.jpg',
          number_hangars: 310,
          hang_amenity: 'Heat, Full Bathroom'
        }
      ])
    })

        .then(() => {
  return knex.raw(
    `SELECT setval('airports_id_seq', (SELECT MAX(id) FROM airports));`
  )
})
}
