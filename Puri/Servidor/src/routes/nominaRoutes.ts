import express, { Router } from 'express';

import NominaControllers from '../controllers/nominaControllers';
import nominaControllers from '../controllers/nominaControllers';

class NominaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', nominaControllers.list);
    }

}

export default new NominaRoutes().router;

