import { useFetchProducts } from "../hooks/useFetchProducts"
import ProductCard from "./ProductCard";

export default function Suggestion({ id }){
    const { list, error, loading } = useFetchProducts(`products?categoryId=${id}`);
    return <>
    { loading && <p>loading</p> }
    { error && <p>{error}</p> }
    { list && 
        list.map((product)=>{
            return <ProductCard key={product.id} product={product} />
        }) 
    }
    </>
}