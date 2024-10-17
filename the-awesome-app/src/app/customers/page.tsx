import { Customer } from "@/model/Customer";
import { Product } from "@/model/Product";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Nextjs Training Customers"
};

export default async function CustomerPage(){


    //delay of 3 secs
    await new Promise(resolve => setTimeout(resolve, 3000));

    return (
        <div>
            <h4>Customers</h4>

            <Suspense fallback={<div className="alert alert-warning">Customers Loading</div>}>
                <CustomerListing/>
            </Suspense>

            <Suspense fallback={<div className="alert alert-danger">Products Loading</div>}>
                <ProductListings/>
            </Suspense>
            
            
        </div>
    )
}


async function CustomerListing(){


     //fetch the customers
    //delay of 5 secs
    await new Promise(resolve => setTimeout(resolve, 7000));
    const url = "http://localhost:9000/customers";
    //api call
    const resp = await fetch(url, {cache: 'no-store'});
    const customers = await resp.json() as Customer[];
    console.log("customers fetched", customers);

    return (
        <div>
            <h6>Customers</h6>
            <table className="table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link href={`/customers/${item.id}`}> {item.name}</Link></td>
                                <td>{item.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


async function ProductListings(){

    //fetch the products
    //delay of 7 secs
    await new Promise(resolve => setTimeout(resolve, 12000));
    const productsUrl = "http://localhost:9000/products";
    //api call
    const productsResp = await fetch(productsUrl, {cache: 'no-store'});
    const products = await productsResp.json() as Product[];

    return (
        <div>
            <h6>Products</h6>

            <table className="table">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}