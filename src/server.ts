import { application, Request, Response } from "express";
import express  from 'express';
import productRoutes from "./controllers/products"

const app = express();
const port: number = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

productRoutes(app);

app.get('/', async (req: Request, res: Response)=>{
  res.send(`Welcome to our store`);
})

app.listen(port, ()=>{
 console.log(`Server is listening on port ${port}`);
 
})

export default app;