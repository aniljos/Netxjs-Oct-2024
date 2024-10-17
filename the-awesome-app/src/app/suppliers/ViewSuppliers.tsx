import { Supplier } from "@/model/Supplier"

type ViewSuppliersProps = {
    suppliers: Supplier[]
}

export default function ViewSuppliers(props: ViewSuppliersProps) {

    const { suppliers } = props;

    return (

        <table className="table">
            <thead>
                <tr>
                    <th>Supplier ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Contact Person</th>
                </tr>
            </thead>
            <tbody>
                {suppliers.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            <td>{item.contactPerson}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}