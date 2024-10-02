import { Request, Response } from 'express';


import pool from '../database';

class PrepagoControllers {

   
    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT cliente FROM inventario');
        res.json(games);
    }

   
}

const prepagoControllers = new PrepagoControllers;
export default prepagoControllers;