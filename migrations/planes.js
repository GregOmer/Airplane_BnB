exports.up = function(knex, Promise) {
  return knex.schema.createTable('planes', function(table) {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.string('make', 20).notNullable().defaultTo('')
    table.string('model', 20).notNullable().defaultTo('')
    table.string('length', 20).notNullable().defaultTo('')
    table.string('wingspan', 20).notNullable().defaultTo('')
    table.string('height', 20).notNullable().defaultTo('')
    table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('planes');
};
