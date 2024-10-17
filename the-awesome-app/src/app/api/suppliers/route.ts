import {suppliers} from '@/data/suppliers';
//REST Endpoints

import { NextResponse } from "next/server";

//GET
export async function GET(request: Request){

    const url = new URL(request.url);
    const query = url.searchParams.get("query");

     //fetch DB from the database
    if(query){
        const results = suppliers.filter(item => item.name?.toLowerCase().includes(query.toLowerCase()) 
                                            || item.location?.toLowerCase().includes(query.toLowerCase())
                                            || item.contactPerson?.toLowerCase().includes(query.toLowerCase())
                                            || item.email?.toLowerCase().includes(query.toLowerCase()));

        return NextResponse.json(results, {status: 200})
    }
    return NextResponse.json(suppliers, {status: 200})
}

//POST
export async function POST(request: Request){

    const supplier = await request.json();
    if(supplier){

        suppliers.push(supplier);
        return NextResponse.json(supplier, {status: 200})
    }
    else{
        return NextResponse.json({}, {status: 400})
    }
}

//PUT