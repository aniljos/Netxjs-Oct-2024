import { Customer } from "@/model/Customer";


type ViewCustomerPageProps={

    params: {id: number}
}

export async function generateMetadata(props: ViewCustomerPageProps){

    const url = "http://localhost:9000/customers";
    //api call
    const resp = await fetch(url);
    const customers = await resp.json() as Customer[];
    const customer = customers.find(item => item.id.toString() === props.params.id.toString())

    return {
        title: "Nextjs Training Customers " + customer?.name    
    }
}

export default async function ViewCustomerPage(props: ViewCustomerPageProps){

    const url = "http://localhost:9000/customers";
    //api call
    const resp = await fetch(url);
    const customers = await resp.json() as Customer[];
    const customer = customers.find(item => item.id.toString() === props.params.id.toString())

    if(customer){
        return(
            <div>
                <h4>Customer ID: {props.params.id}</h4>

                <div>ID: {customer.id}</div>
                <div>Name: {customer.name}</div>
                <div>Location: {customer.location}</div>
            </div>
        )
    }
    else{
        return(
            <div>
                <h4>Customer Not Found: {props.params.id}</h4>
                
            </div>
        )
    }
    
}