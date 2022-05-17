import { Application, Request, Response } from "express";
import { productStore, product } from "../models/products";
import express  from "express"

//instance of product class
const store = new productStore();

const index = async (req: Request, res: Response) =>{
    try {
        const products = await store.index();
        res.json(products)
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

const show = async (req: Request, res: Response) =>{
    try {
        const showProducts = await store.show(req.params.id);
        res.json(showProducts)
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}