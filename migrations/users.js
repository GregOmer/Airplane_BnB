exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id')
    table.string('first_name', 20).notNullable().defaultTo('')
    table.string('last_name', 20).notNullable().defaultTo('')
    table.string('email', 255).notNullable().defaultTo('')
    table.varchar('hashed_pw', 255)
    table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
