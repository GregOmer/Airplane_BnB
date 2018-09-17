exports.seed = function(knex, Promise) {
  return knex('airports').del()
    .then(function() {
      return knex('airports').insert([{
          id: 1,
          ap_name: 'Vance Brand Municipal Airport',
          ap_zip: 80503,
          ap_state: 'CO',
          runway_length: '4800ft',
          ap_photo: './VanceBrandAirport.jpg'
        },
        {
          id: 2,
          ap_name: 'Boulder Municipal Airport',
          ap_zip: 80301,
          ap_state: 'CO',
          runway_length: '4100ft',
          ap_photo: './BoulderMuni.jpg'
        },
      ])
    })

        .then(() => {
  return knex.raw(
    `SELECT setval('airports_id_seq', (SELECT MAX(id) FROM airports));`
  )
})
}
