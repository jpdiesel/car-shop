import chai from 'chai';
import Mongoose from 'mongoose';
import sinon from 'sinon';
import { Car } from '../../../interfaces/CarInterface';
import CarModel from '../../../models/CarModel';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const carModel = new CarModel()

const validCar: Car = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

describe('Na camada CarModel', async () => {

  let serviceStub: sinon.SinonStub;

  before(async () => {
    serviceStub = sinon.stub(Mongoose.Model, 'create');
    serviceStub.resolves(validCar)
  });

  after(() => {
    serviceStub.restore();
  })

  it('Verifica se o corpo do retorno está correto', async () => { });
  const modelResult = await carModel.create(validCar)

  expect(modelResult).to.have.property('model');
  expect(modelResult).to.have.property('year');
  expect(modelResult).to.have.property('color');
  expect(modelResult).to.have.property('buyValue');
  expect(modelResult).to.have.property('seatsQty');
  expect(modelResult).to.have.property('doorsQty');
});