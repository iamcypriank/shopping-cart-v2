import { useFetchProducts } from "../hooks/useFetchProducts"
import ProductCard from "./ProductCard";
import Loading from "./Loading";

export default function Suggestion({ id }){
    const { list, error, loading } = useFetchProducts(`products?categoryId=${id}`);
    return <>
    { loading && <div className="mt-40"><p>{error}</p></div> }
    { error && <p>{error}</p> }
    { list && 
        list.map((product)=>{
            return <ProductCard key={product.id} product={product} />
        }) 
    }
    </>
}