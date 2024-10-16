'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from './page.module.css'
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

const baseUrl = "http://localhost:9000/secure_products";

export default function ListProductsPage(){
    
    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();
    const auth = useSelector((state: AppState) => state.auth);

    useEffect(() => {

        fetchProducts();

    }, [])

    async function fetchProducts(){


        if(!auth.isAuthenticated){
            router.push("/login");
            return;
        }

        try {  

            const headers = {Authorization: `Bearer ${auth.accessToken}`};
            const resp = await axios.get<Product[]>(baseUrl, {headers});
            setProducts(resp.data);
            console.log("resp:", resp);

        } catch (error) {
            console.log("error:", error);
        }

    }

    async function deleteProduct(product: Product){

        try {
            
            const url = `${baseUrl}/${product.id}`;
            await axios.delete(url);
            await fetchProducts();
            alert("Deleted record with id: " + product.id);
        } catch {
            alert("Failed to Delete record with id: " + product.id);
        }

    }

    function editProduct(product: Product){
        router.push("/products/" + product.id);
    }

    return (
        <div>
            <h4>List Products</h4>
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product => {

                    return (
                        <div key={product.id} className={styles.product}>
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <div>
                                <button className="btn btn-warning" onClick={() => deleteProduct(product)}>Delete</button>&nbsp;
                                <button className="btn btn-primary" onClick={() => editProduct(product)}>Edit</button>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}