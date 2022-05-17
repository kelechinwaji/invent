import { application, Request, Response } from "express";
import express  from 'express';

const app = express();
const port: number = 4000;


app.get('/', async (req: Request, res: Response)=>{
  res.send(`Welcome to our store`);
})


app.listen(port, ()=>{
 console.log(`Server is listening on port ${port}`);
 
})