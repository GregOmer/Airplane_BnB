exports.up = function(knex, Promise) {
  return knex.schema.createTable('planes', function(table) {
    table.increments()
    table.string('user', 20).notNullable().defaultTo('')
    table.string('make', 20).notNullable().defaultTo('')
    table.string('model', 20).notNullable().defaultTo('')
    table.string('length', 20).notNullable().defaultTo('')
    table.string('wingspan', 20).notNullable().defaultTo('')
    table.string('height', 20).notNullable().defaultTo('')
    table.timestamps(true,true)
  })
};
