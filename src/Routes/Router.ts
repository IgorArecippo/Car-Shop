import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post('/cars', (req, res, next) => new CarController(req, res, next).create());
router.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());

export default router;