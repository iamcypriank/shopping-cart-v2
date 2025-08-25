import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";
import Loading from "../components/Loading";

export default function Home(){
    const navigate = useNavigate();
    const { list , error , loading } = useFetchProducts('products?offset=12&limit=5');
    return <>
    { loading && <Loading />}
    { error && <div className="mt-40"><Loading /></div>  }
    { list && <section className="p-4 flex flex-col gap-4">
        <article className="h-[200px] flex justify-center items-center bg-accent-primary">
            <Button onClick={()=>{
                navigate('/shop')
            }}>Shop Now</Button>
        </article>
        <section className="flex flex-col gap-4">
            <h1 className="text-center text-2xl p-4">New Arrival</h1>
            <div className="flex gap-8 flex-wrap justify-center items-center ">
                { list.map((product)=>{
                    return <ProductCard key={product.id} product={product} />
                }) }
            </div>
        </section>
    </section>}
    </>
}