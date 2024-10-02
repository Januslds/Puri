import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import corteRoutes from './routes/corteRoutes';
import nominaRoutes from './routes/nominaRoutes';
import prepagoRouter from './routes/prepagoRouter';

class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/puri', gamesRoutes);
        this.app.use('/api/corte', corteRoutes);
        this.app.use('/api/nomina',nominaRoutes);
        this.app.use('/api', prepagoRouter);
        this.app.use('/api/daily-sales', corteRoutes);
        
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('El servicio es por el puerto', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();




