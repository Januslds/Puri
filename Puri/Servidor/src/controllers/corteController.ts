import { Request, Response } from 'express';


import pool from '../database';

class CorteController {


    public async getDailySales(req: Request, res: Response): Promise<void> {
        try {
            const dailySales = await pool.query('SELECT DATE(fecha) AS fecha, SUM(total) AS total_ventas FROM venta WHERE DATE(fecha) = CURDATE() GROUP BY DATE(fecha) ORDER BY fecha DESC');
            res.json(dailySales[0]);
        } catch (error) {
            console.error('Error fetching daily sales:', error);
            res.status(500).json({ message: 'Error fetching daily sales' });
        }
    }

}

const corteController = new CorteController;
export default corteController;