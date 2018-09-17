exports.up = function(knex, Promise) {
  return knex.schema.createTable('hangars', function(table) {
    table.increments('id')
    table.integer('airport_id').notNullable().defaultTo(0)
    table.string('ap_name', 50).notNullable().defaultTo('')
    table.integer('number_hangars').notNullable().defaultTo(0)
    table.string('max_wingspan', 15).notNullable().defaultTo('')
    table.string('max_length', 15).notNullable().defaultTo('')
    table.string('max_height', 15).notNullable().defaultTo('')
    table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hangars');
};
