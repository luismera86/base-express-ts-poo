import express from 'express';

export class Server {

  private app: express.Application;
  private port: number;

  constructor(port: number = 3000) {
    this.app = express();
    this.port = port;
    this.middlewares();
    this.routes();
    this.listen();
  }

  private middlewares(): void { 
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.app.get("/", (req, res) => {
      res.send("Hello World");
    });
  }

  private listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
  
}