import { Request, Response } from 'express';


import pool from '../database';

class NominaControllers {

    public async list(req: Request, res: Response): Promise<void> {
        const empleado = await pool.query('SELECT * FROM empleados WHERE DATE(fecha) = CURDATE()');
        res.json(empleado);
    }
   
    public async getFin(req: Request, res: Response): Promise<any> {
        const empleado = await pool.query('SELECT * from empleado');
        console.log(empleado.length);
        if (empleado.length > 0) {
            return res.json(empleado[0]);
        }
        res.status(404).json({ text: "No hay fecha" });
    }
    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO empleado set ?', [req.body]);
        res.json({ message: 'Empleado guardado' });
    }

   
}

const nominaControllers = new NominaControllers;
export default nominaControllers;