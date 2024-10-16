//<ProductView product={item}/>

import { Product } from "@/model/Product"
import React from "react";

type ProductViewProps = {
    product: Product,
    onAdd? : (product: Product) => void
}

function ProductView(props: ProductViewProps) {

    console.log("ProductView rendered...");

    const item = props.product;

    return (
        <div className="col" key={item.id} >
            <div className="card border-warning" >
                <div className="card-body text-success">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text text-primary">INR {item.price}</p>
                    <button className="btn btn-primary" onClick={() => props.onAdd!(item)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )

}

export default React.memo(ProductView);