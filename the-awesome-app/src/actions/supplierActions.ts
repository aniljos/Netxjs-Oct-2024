'use server'

import { suppliers } from "@/data/suppliers"
import { Supplier } from "@/model/Supplier"
import { redirect } from "next/navigation";

export async function saveForm(prevState: any,  formData: FormData){
    
    const supplier: Supplier = {
        id: Number( formData.get("id")?.toString()),
        name: formData.get("name")?.toString(),
        location: formData.get("location")?.toString(),
        contactPerson: formData.get("contactPerson")?.toString(),
        email: formData.get("email")?.toString(),
    }
    console.log("saveForm", supplier);
    if(!supplier.id){
        return {status: 1, message: "Id is missing"}
    }
    else{
        suppliers.push(supplier);
        redirect("/suppliers");
    }

    
}

export async function validateUser(id: number){


    return {status: 1}

}
