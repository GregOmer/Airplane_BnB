exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 001, first_name: 'Greg',last_name: 'O',email: 'g@o.com',hashed_pw: 'go'},
        {id: 002,first_name: 'Jefe',last_name: 'S',email: 'j@s.com',hashed_pw: 'js'},
        {id: 003,first_name: 'Ty',last_name: 'M',email: 't@m.com',hashed_pw: 'tm'},
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    })
};
