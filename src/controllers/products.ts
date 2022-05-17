import { Application, Request, Response } from "express";
import { productStore, Product } from "../models/products";
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

const create  = async (req: Request, res: Response) =>{
    const product: Product = {
       productName: req.body.productName,
       quantity: req.body.quantity,
       modeOfTracking: req.body.modeOfTracking,
       wareHouseName: req.body.wareHouseName,
       dateOf: req.body.dateOf
    }
    try {
        const addProducts = await store.create(product);
        res.json(addProducts);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

const update = async (req: Request, res: Response) =>{
    const product:Product = {
        productName: req.body.productName,
        quantity: req.body.quantity,
        modeOfTracking: req.body.modeOfTracking,
        wareHouseName: req.body.wareHouseName,
        dateOf: req.body.dateOf
    }

    try {
        const upProducts = await store.update(req.params.id, product)
        res.json(upProducts);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}