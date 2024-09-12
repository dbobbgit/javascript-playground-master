const { scryptSync } = require('node:crypto')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username', 255).unique()
    table.text('password')
  })

  await knex('users').insert({ username: 'admin', password: hash('admin') })
}

function hash(password) {
  return scryptSync(password, 'vue-starter', 64).toString('hex')
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable('users')
}
