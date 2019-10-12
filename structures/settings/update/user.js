const knex = require('../../database/knex')
const config = require('../../../config')

module.exports = async (identify, settingsOverwrite) => {
  try {
    await knex(config.database.tables.user).update(settingsOverwrite).where({ identify })
  } catch (error) {
    throw new Error(error)
  }
}
