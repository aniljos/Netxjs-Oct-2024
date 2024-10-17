import { Product } from "@/model/Product";
import { AppState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useFetchProducts(url: string, isSecure: boolean){

    const [products, setProducts] = useState<Product[]>([]);
    const auth = useSelector((state: AppState) => state.auth);
    const router = useRouter();
    const abortController = new AbortController();
    useEffect(() => {

        fetchProducts()

        return () => {

            if(abortController){
                abortController.abort();
            }
        }

    }, [])

    async function fetchProducts(){

        if(isSecure && !auth.isAuthenticated){
            router.push("/login");
            return;
        }

        try {

            const headers: {Authorization?: string} = {};
            if(isSecure){
                headers.Authorization = `Bearer ${auth.accessToken}`;
            }

            const resp = await axios.get<Product[]>(url, {headers, signal: abortController.signal});
            setProducts(resp.data)
        } catch {
            
            throw new Error("failed to fetch the data");
        }

    }

    return {products, setProducts, fetchProducts};

}