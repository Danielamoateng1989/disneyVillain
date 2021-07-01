const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { describe, it } = require('mocha')
const {getAllVillains, getVillainBySlug, saveNewVillain} = require('../../controller/villains')
const models = require('../../models/index')
const { villainsList, singleVillain} = require('../mocks/villains')
co


chai.use(sinonChai)
const { expect }  = chai

describe('Villains Controller', () => {
    describe('Gets all villains', () => {
        it('should return all villains from database and calls response.send() with the list', async() => {
            const stubbedFindAll = sinon.stub(models.villains, 'findAll').returns(villainsList)
            const stubbedSend = sinon.stub()
            const response = {send: stubbedSend}

            await getAllVillains({}, response)
            expect(stubbedFindAll).to.have.callCount(1);
            expect(stubbedSend).to.have.been.calledWith(villainsList)
        })
    })

    describe('Get villain by slug', () => {

    it('should return a villain associated with the provided slug from the database and calls response.send', async() => {
        const stubbedFindOne = sinon.stub(models.villains, 'findOne').return(singleVillain)
        const request = {params: {slug: 'iron-man'}}
        const stubbedSend = sinon.stub()
        const response = {send: stubbedSend}


        await getVillainBySlug(request, response)
        expect(stubbedFindOne).to.have.callCount(1)
        expect(stubbedFindOne).to.have.been.calledWith({where: {slug: 'iron-man'}})
        expect(stubbedSend).to.have.been.calledWith(singleVillain)
    })
    
    })

    describe('Create a new villain', () => {
        it('accepts a new villain and saves them as a villain, returns saved villain with a 201 status', async())
        const stubbedCreate = sinon.stub(models.villains, 'create').return(singleVillain)
        const request = {body: singleVillain}
        const stubbedSend = sinon.stub()
        const stubbedStatus = sinon.stub().returns({send: stubbedSend})
        const response = {status: stubbedStatus}


        await saveNewVillain(request, response)

        expect(stubbedCreate).to.have.been.calledWith(singleVillain)
        expect(stubbedStatus).to.have.been.calledWith(201)
        expect(stubbedSend).to.have.been.calledWith(singleVillain)



    })
})