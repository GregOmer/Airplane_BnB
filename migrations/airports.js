exports.up = function(knex, Promise) {
  return knex.schema.createTable('airports', function(table) {
    table.increments()
    table.string('ap_name', 50).notNullable().defaultTo('')
    table.string('ap_county', 20).notNullable().defaultTo('')
    table.string('ap_state', 2).notNullable().defaultTo('')
    table.string('runway_length').notNullable().defaultTo('')
    table.timestamps(true,true)
  })
};
