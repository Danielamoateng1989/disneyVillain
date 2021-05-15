
const sequelize = require('sequelize')
const disneyVillainsModels = require('./disney-vallains')



const connection = new sequelize('villains', 'disneyVillainsUser', 'Dannyboy123',
 {host: 'localhost', dialect: 'mysql'}
)

const disneyVillains = disneyVillainsModels(connection, sequelize)



module.exports = {
    disneyVillains
}

