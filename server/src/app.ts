import express, { Application } from 'express';
import cors from 'cors';
import config from './config';
import db from './database/config'
import { AuthRouter } from './routes';

class App {

    private app: Application;
    private PORT: string | undefined;
    private paths = {
        'auth': '/api/auth'
    };

    constructor() {
        this.app = express();
        this.PORT = config.port


        this.db();
        this.middlewares();
        this.routes();
    }
    
    
    private async db() : Promise<void> {
        await db();
    }

    private middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use(this.paths.auth, AuthRouter);
    }


    listen(){
        this.app.listen(this.PORT, () => {
            console.log(`Server running on port ${this.PORT}`);
        }
    );
    }
}


export default App;