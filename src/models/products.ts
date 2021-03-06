import { type } from "os";
import client from "../database";

// Type declaration for the table schema
export type Product = {
    id? : string,
    productName: string,
    quantity: string,
    modeOfTracking: string,
    wareHouseName: string,
    dateOf: string
}

// This class holds all the query methods
export class productStore{
    // index method queries the products table and returns all the available items.
   async index(): Promise<Product[]>{
       try {
           const conn = await client.connect();
           const sql = `SELECT * FROM products`;
           const result = await conn.query(sql);
           conn.release();
           return result.rows
       } catch (error) {
        throw new Error(`could not get all products ${error}`);
       }
   }

// show method queries the products table and returns the item on the id column.
   async show(id:string): Promise<Product>{
       try {
        const conn = await client.connect();
        const sql = `SELECT * FROM products WHERE id = ${id}`;
        const result = await conn.query(sql, [id]);
        conn.release();
        return result.rows[0]
       } catch (error) {
        throw new Error(`could not get product ${error}`); 
       }
   }

   // create method adds a new column with data
   async create(product: Product): Promise<Product>{
       try {
        const conn = await client.connect();
        const sql = `INSERT INTO products (product_name,  quantity, mode_of_tracking, ware_house_name, date_of) VALUES ($1, $2, $3, $4, $5) RETURNING *`; 
        const values = [product.productName, product.quantity, product.modeOfTracking, product.wareHouseName, product.dateOf];
        const result = await conn.query(sql, values);
        conn.release();
        return result.rows[0]
       } catch (error) {    
        throw new Error(`could not create new product ${error}`); 
       }
   }

   // update methods allows a user to edit the details of the existing product
   async update (id: string, product: Product): Promise<Product>{
       try {
           const conn = await client.connect();
           const sql = `UPDATE  products SET product_name = ($1), quantity = ($2), mode_of_tracking = ($3), ware_house_name = ($4), date_of = ($5) WHERE id = ${id} RETURNING *`;
           const values = [product.productName, product.quantity, product.modeOfTracking, product.wareHouseName, product.dateOf];
           const result = await conn.query(sql, values);
           conn.release();
           return result.rows[0]
       } catch (error) {
        throw new Error(`could not edit product ${error}`); 
       }
   }

   // delete method delete all items from a specified column
   async destroy(id:string): Promise<Product>{
      try {
          const conn = await client.connect();
          const sql = ` DELETE FROM products WHERE id = ${id}`;
          const result = await conn.query(sql)
          conn.release();
          return result.rows[0]
      } catch (error) {
        throw new Error(`could not delete product ${error}`); 
      }
   }
}