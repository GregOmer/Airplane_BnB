exports.up = function(knex, Promise) {
  return knex.schema.createTable('hangars', function(table) {
    table.increments()
    table.string('ap_name', 50).notNullable().defaultTo('')
    table.number('number_hangars', 20).notNullable().defaultTo('')
    table.timestamps(true,true)
  })
};
