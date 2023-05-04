import 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import MotoService from '../../../src/Services/MotoService'; 
import MotorcycleODM from '../../../src/Models/MotorcycleODM';
// import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import { mockMoto } from '../../Mocks'; 

describe('Tests Motorcycle service', function () {
  it('tests create method', async function () {
    const stub = sinon.stub(MotorcycleODM.prototype, 'create').resolves(mockMoto[0]);
    const motoService = new MotoService();
    const newMoto = {
      id: '60c42af7a3b83152bc05d6f0',
      engineCapacity: 1300,
      category: 'Trail',
      buyValue: 60000,
      color: 'White',
      model: 'CBR',
      year: 2011,
      status: false,
    };
    const motoCreated = await motoService.create(newMoto);
    expect(motoCreated).to.equal(mockMoto[0]);
    stub.restore();
  });

  it('tests findAll method', async function () {
    const stub = sinon.stub(MotorcycleODM.prototype, 'findAll').resolves(mockMoto);
    const motoService = new MotoService();
    const allMotos = motoService.findAll();
    expect(allMotos).to.equal(mockMoto);
    stub.restore();
  });

  it('tests findById method', async function () {
    const stub = sinon
      .stub(MotorcycleODM.prototype, 'findById')
      .resolves(mockMoto[0]);
    const motoService = new MotoService();
    const motoById = motoService.findById('60c42af7a3b83152bc05d6f0');
    expect(motoById).to.equal(mockMoto[0]);
    stub.restore();
  });

  it('tests update method', async function () {
    const updateStub = sinon
      .stub(MotorcycleODM.prototype, 'updateCar')
      .resolves(mockMoto[0]);
    const findStub = sinon
      .stub(MotorcycleODM.prototype, 'findById')
      .resolves(mockMoto[0]);
    const motoService = new MotoService();
    const mock = {
      id: '60c42af7a3b83152bc05d6f1',
      engineCapacity: 16000000,
      category: 'Street',
      buyValue: 70000,
      color: 'Red',
      model: 'Electra Glide',
      year: 2022,
      status: false,
    };
    const updated = await motoService.updateCar('60c42af7a3b83152bc05d6f1', mock);
    expect(updated).to.eq(mockMoto[1]);
    updateStub.restore();
    findStub.restore();
  });
});