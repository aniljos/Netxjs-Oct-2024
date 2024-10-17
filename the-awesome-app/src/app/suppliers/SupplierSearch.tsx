'use client'

import { Supplier } from "@/model/Supplier";
import { useEffect, useState } from "react"
import ViewSuppliers from "./ViewSuppliers";

type SupplierSearchProps = {
    fetchData: (query: string) => Promise<JSX.Element>
}

export default function SupplierSearch(props: SupplierSearchProps){

    const [searchKey, setSearchKey] = useState("");
    const [suppliersJSX, setSuppliersJSX] = useState<JSX.Element>()

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData(){

        //invoks a server action
        const suppliers = await props.fetchData("");
        setSuppliersJSX(suppliers);
    }

    async function search(){
        const suppliers = await props.fetchData(searchKey);
        setSuppliersJSX(suppliers);
    }

    return (
        <div>
            <input className="form-control" type="search" placeholder="Search" value={searchKey} 
                                                            onChange={e => setSearchKey(e.target.value)}/>
            <button className="btn btn-primary" onClick={search}>Search</button>

            {/* <ViewSuppliers suppliers={suppliers}/> */}
            {suppliersJSX}
        </div>
    )
}