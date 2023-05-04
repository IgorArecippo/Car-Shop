// import ICar from '../src/Interfaces/ICar';
// import IMotorcycle from '../src/Interfaces/IMotorcycle';

const mockMoto = [
  {
    id: '60c42af7a3b83152bc05d6f0',
    engineCapacity: 1300,
    category: 'Trail',
    buyValue: 60000,
    color: 'White',
    model: 'CBR',
    year: 2011,
    status: false,
  },
  {
    id: '60c42af7a3b83152bc05d6f1',
    engineCapacity: 1600,
    category: 'Street',
    buyValue: 70000,
    color: 'Red',
    model: 'Electra Glide',
    year: 2022,
    status: false,
  },
  {
    id: '60c42af7a3b83152bc05d6f3',
    engineCapacity: 1200,
    category: 'Custom',
    buyValue: 90000,
    color: 'Blue',
    model: 'Ninja',
    year: 2020,
    status: true,
  },
];

const mockCar = [
  {
    id: '60c42af7a3b83152bc05d6f3',
    model: 'GOl',
    year: 2001,
    color: 'blue',
    seatsQty: 5,
    doorsQty: 4,
    buyValue: 5000,
  },
  {
    id: '60c42af7a3b83152bc05d6f2',
    model: 'Fusca',
    year: 1978,
    color: 'Yellow',
    seatsQty: 4,
    doorsQty: 2,
    buyValue: 500000,
  },
];

export { mockMoto, mockCar };