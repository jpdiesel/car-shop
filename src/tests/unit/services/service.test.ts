import chai from 'chai';
import Mongoose from 'mongoose';
import sinon from 'sinon';
import { Car } from '../../../interfaces/CarInterface';
import CarService from '../../../services/CarService';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const carService = new CarService()

const validCar: Car = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

describe('Na camada CarService', async () => {

  let serviceStub: sinon.SinonStub;

  before(async () => {
    serviceStub = sinon.stub(Mongoose.Model, 'create');
    serviceStub.resolves(validCar)
  });

  after(() => {
    serviceStub.restore();
  })

  it('Verifica se o corpo do retorno está correto', async () => { });
  const createdCar = await carService.create(validCar)

  expect(createdCar).to.have.property('model');
  expect(createdCar).to.have.property('year');
  expect(createdCar).to.have.property('color');
  expect(createdCar).to.have.property('buyValue');
  expect(createdCar).to.have.property('seatsQty');
  expect(createdCar).to.have.property('doorsQty');
});