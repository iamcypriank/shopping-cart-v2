import { useParams } from "react-router-dom";
import { useFetchProducts } from "../hooks/useFetchProducts"
import { BASE_URL } from "../utils/utils";
import Button from "./Button";
import Quantity from "./Quantity";
import Suggestion from "./Suggestion";
import Loading from "./Loading";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProductPage(){
    const { id } = useParams();
    const { list , error, loading } = useFetchProducts(`products/${id}`);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    

    if(loading) return <div className="mt-40"><Loading /></div>

    return <>
    { error && <p className="mt-30 text-center">{error}</p> }
    { list && <div className="p-4 flex flex-col gap-16">
        <motion.section
        initial={{ opacity : 0}} 
        whileInView={{ opacity : 1 }}
        className="flex gap-4 max-[723px]:flex-col max-[723px]:items-center ">
        <div className="min-w-[250px] max-w-[250px] flex flex-col gap-4 ">
            <img src={list.images} />
            <div className="w-full">
                <Quantity id={list.id} product={list} />
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <h1>{list.title}</h1>
            <h2 className="text-3xl">${list.price}</h2>
            <p className="min-[723px]:w-[40ch] text-left">{list.description}</p>
            
        </div>
    </motion.section>
    <hr className="border-gray-200" />
    <section className="flex  flex-wrap justify-center gap-8">
        <Suggestion id={list.category.id} />
    </section>
    </div> }
    </>
}