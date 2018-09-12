exports.up = function(knex, Promise) {
  return knex.schema.createTable('hangars', function(table) {
    table.increments()
    table.string('ap_name', 50).notNullable().defaultTo('')
    table.number('number_hangars', 20).notNullable().defaultTo(0)
    table.string('max_wingspan', 15).notNullable().defaultTo('')
    table.string('max_length', 15).notNullable().defaultTo('')
    table.string('max_height', 15).notNullable().defaultTo('')
    table.timestamps(true,true)
  })
};
