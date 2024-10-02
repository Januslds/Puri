import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({text: 'El Api esta en  /api/games'});
    }

}

export const indexController = new IndexController;