import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts"
import { ListFilter } from "lucide-react";
import Loading from "../components/Loading";

export default function Shop(){


    const [ category, setCategory ] = useState('');
    const [ sortType, setSortType ] = useState('');
    const { list , error , loading  } = useFetchProducts(`products${category}`);

    const sortedList = useMemo(()=>{

        if(!list) return [];
         const newList = [...list];

        if(sortType=="low"){
            newList.sort((a,b)=> a.price-b.price);
        }

        if(sortType=="high"){
            newList.sort((a,b)=> b.price-a.price);
        }

        return newList;
    },[list,sortType])




    function handleCategory(e){
        setCategory(e.target.value);
    }

    function handleSort(e){
        setSortType(e.target.value)
    }
    
    if(loading) return <div className="mt-40"><Loading /></div>;
    
    return <>
    { error && <p className="mt-30 text-center">{error}</p> }
    { list && list.length==0 && <p className="mt-30 text-center" >API is currently not working</p>}
    { list && list.length!=0 &&
        <section className="p-4 flex flex-col gap-4">
            <div className="flex justify-between">
                
               <div className="flex justify-center items-center gap-4 bg-accent-primary text-white py-2 px-2 rounded-md w-fit" >
                <ListFilter size={16} />
                <select
                className="outline-none w-fit appearance-none"
                onChange={handleCategory} value={category} name="" id="category">
                    <option className="bg-black" value="">All</option>
                    <option className="bg-black" value="?categoryId=1">Clothes</option>
                    <option className="bg-black" value="?categoryId=2">Electronics</option>
                    <option className="bg-black" value="?categoryId=3">Furniture</option>
                    <option className="bg-black" value="?categoryId=4">Shoes</option>
                    <option className="bg-black" value="?categoryId=5">Miscellaneous</option>
                </select>
                </div>


                <div className="flex justify-center items-center gap-4 bg-accent-primary text-white py-2 px-2 rounded-md w-fit" >
                <ListFilter size={16} />
                <select
                className="outline-none w-fit appearance-none"
                onChange={handleSort} value={sortType} name="" id="category">
                    <option className="bg-black" value="">Sort By</option>
                    <option className="bg-black" value="low">low to high</option>
                    <option className="bg-black" value="high">high to low</option>
                </select>
                </div>

            </div>
            <section className="flex flex-wrap justify-center gap-8" >
                { sortedList.map((product)=>{
                    return <ProductCard key={product.id} product={product} />
                })}
            </section>
        </section>
    }
    </>
}