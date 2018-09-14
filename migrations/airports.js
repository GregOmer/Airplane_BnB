exports.up = function(knex, Promise) {
  return knex.schema.createTable('airports', function(table) {
    table.increments()
    table.string('ap_name', 50).notNullable().defaultTo('')
    table.number('ap_zip', 5).notNullable().defaultTo(0)
    table.string('ap_state', 2).notNullable().defaultTo('')
    table.string('runway_length').notNullable().defaultTo('')
    table.timestamps(true,true)
  })
};
