const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { describe, it } = require('mocha')
const {getAllVillains, getVillainBySlug, saveNewVillain} = require('../../controller/villains')
const models = require('../../models/index')


chai.use(sinonChai)
const { expect }  = chai

describe('Villains Controller', () => {
    describe('Gets all villains', () => {
        it('should return all villains from database and calls response.send() with the list', async() => {
            const stubbedFindAll = sinon.stub(models.villains, 'findAll')
            const stubbedSend = sinon.stub()
            const response = {send: stubbedSend}

            await getAllVillains({}, response)
        })
    })

    describe('Get villain by slug', () => {

    })

    describe('Create a new villain', () => {

    })
})