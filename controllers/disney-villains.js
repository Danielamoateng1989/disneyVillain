
const villains = require('../models/disney-vallains')
const disneyVillains = require('../models')


const getAllVillains = (req, res) => {

    const villains = models.disneyVillains.findAll()
    return res.send(villains)
}


const getVillainsBySlug = (req, res) => {
    const { slug } = req.params

    const foundVillain = villains.filter((villain) => { villain.slug === slug } )
    return response.send( foundVillain )
}


const saveNewVillain = (req, res) => {

const {name, movie, slug} = req.body

}