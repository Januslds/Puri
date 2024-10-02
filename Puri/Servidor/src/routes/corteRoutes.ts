import express, { Router } from 'express';

import corteController from '../controllers/corteController';

class CorteRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', corteController.getDailySales);
      //  this.router.get('/:id', corteController.getOne);
        this.router.get('/daily-sales', corteController.getDailySales);
    }

}

export default new CorteRoutes().router;

