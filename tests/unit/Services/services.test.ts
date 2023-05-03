import 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import MotoService from '../../../src/Services/MotoService'; 
import MotorcycleODM from '../../../src/Models/MotorcycleODM';
// import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import { mockMoto } from '../../Mocks'; 

describe('Tests Motorcycle service', function () {
  it('tests create method', async function () {
    sinon.stub(MotorcycleODM.prototype, 'create').resolves(mockMoto[0]);
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
  });
});