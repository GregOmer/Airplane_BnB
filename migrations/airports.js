exports.up = function(knex, Promise) {
  return knex.schema.createTable('airports', function(table) {
    table.increments('id')
    table.string('ap_name', 50).notNullable().defaultTo('')
    table.string('ap_zip', 5).notNullable().defaultTo('')
    table.string('ap_state', 2).notNullable().defaultTo('')
    table.string('runway_length').notNullable().defaultTo('')
    table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('airports');
};
