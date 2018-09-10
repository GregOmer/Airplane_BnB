
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_airports', function(table) {
    table.increments()
    table.string('user', 20).notNullable().defaultTo('')
    table.string('airports', 255).notNullable().defaultTo('')
    table.timestamps(true,true)
  })
};
