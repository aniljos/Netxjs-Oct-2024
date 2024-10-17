
import SupplierSearch from "./SupplierSearch";
import ViewSuppliers from "./ViewSuppliers";
import { suppliers } from "@/data/suppliers";
import Link from "next/link";

export default async  function SupplierListing(){

    


    async function fetchSuppliers(query: string){
        'use server'
        //const response = await fetch("http://localhost:3001/api/suppliers?query=" + query, {cache: 'no-store'});
        //const suppliers = await response.json() as Supplier[];

        
        if(query){
            const results = suppliers.filter(item => item.name?.toLowerCase().includes(query.toLowerCase()) 
                                                || item.location?.toLowerCase().includes(query.toLowerCase())
                                                || item.contactPerson?.toLowerCase().includes(query.toLowerCase())
                                                || item.email?.toLowerCase().includes(query.toLowerCase()));
    
            return <ViewSuppliers suppliers={results}/>;
        }
        return <ViewSuppliers suppliers={suppliers}/>;

    }

    return (
        <div>
            <h4>Suppliers</h4>
            <Link href="/suppliers/add">Add New Supplier</Link>

            <SupplierSearch fetchData={fetchSuppliers}/>


           
        </div>
    )
}