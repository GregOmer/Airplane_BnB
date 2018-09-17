exports.seed = function(knex, Promise) {
  return knex('hangars').del()
    .then(function() {
      return knex('hangars').insert([
        {
          id: 1,
          airport_id: 1,
          ap_name: 'Vance Brand Municipal Airport',
          number_hangars: 273,
          max_wingspan: '40.1',
          max_length: '30.1',
          max_height: '15.1'
        },
        {
          id: 2,
          airport_id: 2,
          ap_name: 'Boulder Municipal Airport',
          number_hangars: 115,
          max_wingspan: '40.1',
          max_length: '30.1',
          max_height: '15.1'
        },
      ])
    })
        .then(() => {
  return knex.raw(
    `SELECT setval('hangars_id_seq', (SELECT MAX(id) FROM hangars));`
  )
})
}
