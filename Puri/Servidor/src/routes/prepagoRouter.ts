import express, { Router } from 'express';

import gamesController from '../controllers/prepagoControllers';
import prepagoControllers from '../controllers/prepagoControllers';

class PrepagoRouter {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/prepago', prepagoControllers.list);
       
    }

}

export default new PrepagoRouter().router;

