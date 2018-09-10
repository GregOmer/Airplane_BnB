exports.seed = function(knex, Promise) {
  return knex('planes').del()
    .then(function() {
      return knex('planes').insert([{
          id: 1,
          user_id: 1,
          make: 'Cessna',
          model: '210'
          length: '28.2'
          wingspan: '36.9'
          height: '9.8'
        },
        {
          id: 2,
          user_id: 2,
          make: 'Cessna',
          model: '441 Conquest II'
          length: '39.0'
          wingspan: '49.4'
          height: '13.2'
        },

        .then(() => {
  return knex.raw(
    `SELECT setval('planes_id_seq', (SELECT MAX(id) FROM planes));`
  )
})
}
