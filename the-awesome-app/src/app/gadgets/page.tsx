'use client'
import { CartItem } from '@/model/CartItem';
import { Product } from '@/model/Product';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {addToCart as addToGadgetsCart} from '@/redux/gadgetsReducers';
import ProductView from './components/ProductView';
import { useTitle } from '@/hooks/useTitle';



const baseUrl = "http://localhost:9000/products";
function GadgetStore(){

    const [products, setProducts] = useState<Product[]>([]);
    const [isMessageVisible, setMessageVisible] = useState(false);

    const dispatch = useDispatch();
    useTitle("Gadgets");
    
    useEffect(() => {

        fetchProducts();

    }, [])
    async function fetchProducts(){

        try {  
            const resp = await axios.get<Product[]>(baseUrl);
            setProducts(resp.data);
            console.log("resp:", resp);

        } catch (error) {
            console.log("error:", error);
        }

    }
    const addToCart = useCallback( (product: Product): void => {
        
        //dispatch({type: "addToCart", payload: new CartItem(product, 1)});
        dispatch(addToGadgetsCart( new CartItem(product, 1)));
    }, [])

   

    function renderProducts() {

        const productsView =  products.map((item) => {
           

            return (

                <ProductView product={item} key={item.id} onAdd={addToCart}/>
                // <div className="col" key={item.id} >
                //     <div className="card border-warning" >
                //         <div className="card-body text-success">
                //             <h5 className="card-title">{item.name}</h5>
                //             <p className="card-text">{item.description}</p>
                //             <p className="card-text text-primary">INR {item.price}</p>
                //             <button className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
                //         </div>
                //     </div>
                // </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }


    return (
        <div>
            <h1>Gadget Store</h1>

            {isMessageVisible ? <div className='alert alert-info'>This is an example of React Redux</div> : null}
            <div>
                <button className='btn btn-info' onClick={() => setMessageVisible(pv => !pv)}>
                    {isMessageVisible? "Hide" : "Show"}
                </button>
            </div>
            <br/>

            <div>
                {renderProducts()}
            </div>
        </div>

    );
}

export default GadgetStore;