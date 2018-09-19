exports.up = function(knex, Promise) {
  return knex.schema.createTable('airports', function(table) {
    table.increments('id')
    table.string('ap_name', 255).notNullable().defaultTo('')
    table.string('serves', 255).notNullable().defaultTo('')
    table.string('ap_zip', 5).notNullable().defaultTo('')
    table.string('ap_state', 2).notNullable().defaultTo('')
    table.string('coordinates', 255).notNullable().defaultTo('')
    table.string('runway_length').notNullable().defaultTo('')
    table.string('runway_orientation', 10).notNullable().defaultTo('')
    table.string('runway_type', 255).notNullable().defaultTo('')
    table.string('elevation',20).notNullable().defaultTo('')
    table.string('ap_photo', 255).notNullable().defaultTo('')
    table.integer('number_hangars', 10).notNullable().defaultTo(0)
    table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('airports');
};
