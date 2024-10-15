'use client';

import { useParams } from "next/navigation"

export default function EditProductPage(){

    const params = useParams();

    return (
        <div>
            <h4>Edit Product: {params.id}</h4>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input  className="form-control" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number"  className="form-control" id="price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input  className="form-control" id="desc"/>
                </div>
                <br/>
                <div>
                    <button className="btn btn-primary">Save</button>&nbsp;
                    <button className="btn btn-info">Cancel</button>
                </div>

            </form>

        </div>
    )
}