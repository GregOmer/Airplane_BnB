exports.seed = function(knex, Promise) {
  return knex('planes').del()
    .then(function() {
      return knex('planes').insert([
        {
          id: 1,
          user_id: 1,
          make: 'Cessna',
          model: '210',
          length: '28f2i',
          wingspan: '36f9i',
          height: '9f8i'
        },
        {
          id: 2,
          user_id: 2,
          make: 'Cessna',
          model: '441 Conquest II',
          length: '39f0i',
          wingspan: '49f4i',
          height: '13f2i'
        },
      ])
    })
        .then(() => {
  return knex.raw(
    `SELECT setval('planes_id_seq', (SELECT MAX(id) FROM planes));`
  )
})
}
