exports.seed = function(knex, Promise) {
  return knex('airports').del()
    .then(function() {
      return knex('airports').insert([{
          id: 1,
          ap_name: 'Vance Brand Municipal Airport',
          ap_county: 'Boulder',
          ap_state: 'CO',
          runway_length: '4800ft'
        },
        {
          id: 2,
          ap_name: 'Boulder Municipal Airport',
          ap_county: 'Boulder',
          ap_state: 'CO',
          runway_length: '4100ft'
        },

        .then(() => {
  return knex.raw(
    `SELECT setval('airports_id_seq', (SELECT MAX(id) FROM airports));`
  )
})
}
