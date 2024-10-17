import { Customer } from "@/model/Customer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Nextjs Training Customers"
};

export default async function CustomerPage(){

    const url = "http://localhost:9000/customers";
    //api call
    const resp = await fetch(url, {cache: 'no-store'});
    const customers = await resp.json() as Customer[];
    console.log("customers fetched", customers);

    return (
        <div>
            <h4>Customers</h4>
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