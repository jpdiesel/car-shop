// template para criação dos testes de cobertura da camada de controller


import chai from 'chai';
import sinon from 'sinon';
import App from '../../../app';
import CarController from '../../../controllers/CarController';
import { Car } from '../../../interfaces/CarInterface';
import CarService from '../../../services/CarService';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const carController = new CarController()

const validCar: Car = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

describe('Sua descrição', async () => {

  let serviceStub: sinon.SinonStub;

  before(async () => {
    serviceStub = sinon.stub(CarService.prototype, 'read');
    serviceStub.resolves(validCar)
  });

  after(() => {
    serviceStub.restore();
  })

  it('', async () => { });
  const request = await chai
    .request(App)
    .get('/cars')

  expect(request.status).to.be.equal(200);
  expect(request.body).to.have.property('model');
  expect(request.body).to.have.property('year');
  expect(request.body).to.have.property('color');
  expect(request.body).to.have.property('buyValue');
  expect(request.body).to.have.property('seatsQty');
  expect(request.body).to.have.property('doorsQty');
});