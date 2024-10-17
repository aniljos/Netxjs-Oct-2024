'use client'
import { saveForm, validateUser } from "@/actions/supplierActions"
import { useFormState } from "react-dom"
export default function AddSupplierPage() {

    const [state, submitForm] = useFormState(saveForm, {status: 0, message: ""});

    return (
        <div>
            <h4>Add New Supplier</h4>

            <form action={submitForm}>

                {state.status === 1?  <div className="alert alert-danger">{state.message}</div>: null}

                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input id="id" name="id" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input id="location" name="location" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="contactPerson">Contact</label>
                    <input id="contactPerson" name="contactPerson" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" className="form-control" />
                </div>
                <br />
                <div>
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}