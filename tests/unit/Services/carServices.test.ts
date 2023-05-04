import 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import { mockCar } from '../../Mocks';
import CarODM from '../../../src/Models/CarODM';
import CarService from '../../../src/Services/CarService';
// import ICar from '../../../src/Interfaces/ICar';

describe('Tests Car service', function () {
  it('tests create method', async function () {
    const stub = sinon.stub(CarODM.prototype, 'create').resolves(mockCar[0]);
    const carService = new CarService();
    const newCar = {
      id: '60c42af7a3b83152bc05d6f3',
      model: 'GOl',
      year: 2001,
      color: 'blue',
      seatsQty: 5,
      doorsQty: 4,
      buyValue: 5000,
    };
    const carCreated = await carService.create(newCar);
    expect(carCreated).to.equal(mockCar[0]);
    stub.restore();
  });

  it('tests findAll method', async function () {
    const stub = sinon.stub(CarODM.prototype, 'findAll').resolves(mockCar);
    const carService = new CarService();
    const allMotos = carService.findAll();
    expect(allMotos).to.equal(mockCar);
    stub.restore();
  });

  // it('tests findById method', async function () {
  //   const car: ICar = {
  //     id: '60c42af7a3b83152bc05d6f3',
  //     model: 'GOl',
  //     year: 2001,
  //     color: 'blue',
  //     seatsQty: 5,
  //     doorsQty: 4,
  //     buyValue: 5000,
  //   };
  //   const stub = sinon
  //     .stub(CarODM.prototype, 'findById');
  //   stub.resolves(car);
  //   const carService = new CarService();
  //   const carId = carService.findById('60c42af7a3b83152bc05d6f3');
  //   expect(carId).to.deep.equal(mockCar[0]);
  //   stub.restore();
  // });
});
