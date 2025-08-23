export const BASE_URL = 'https://api.escuelajs.co/api/v1/';



export function addToCart( cart,updateCart,id,product, quantity ){
        let exists = undefined;
        if(cart.length>0){
            //find it already exists in cart
            exists = cart.find((item)=>{
                return item.id==id;
            })
        }
            
            //only if it exists
            if(exists){
                let newQuantity = exists.quantity + quantity;
                if(newQuantity>=10) newQuantity=10;
                const newItem = {
                    quantity : newQuantity,
                    id : id,
                    product : product
                }

                const filteredCart = cart.filter((item)=>{
                    return item.id!=id;
                })

                updateCart([...filteredCart,newItem]);
                

            }else{
                const newItem = {
                    quantity : quantity,
                    id : id,
                    product : product
                }
                updateCart([...cart,newItem])
            }
    }