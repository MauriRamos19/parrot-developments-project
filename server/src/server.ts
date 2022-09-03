import express, { Application } from 'express';
import cors from 'cors';
import config from './config';
import db from './utils/db'
import AuthRouter from './utils/auth';

class App {

    private app: Application;
    private PORT: string | undefined;


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
        this.app.post('/signIn',AuthRouter.signIn);
        this.app.post('/signUp', AuthRouter.signUp);
        this.app.use('/api', AuthRouter.protect)
    }


    listen(){
        this.app.listen(this.PORT, () => {
            console.log(`Server running on port ${this.PORT}`);
        }
    );
    }
}


export default App;