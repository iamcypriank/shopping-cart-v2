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
                let newQuantity = quantity;
                if(newQuantity>=10) newQuantity=10;
                if(newQuantity<=1) newQuantity=1;

                const updatedCart = cart.map((item)=>{
                    if(item.id==id){
                        return{
                            ...item,
                            quantity : newQuantity
                        }
                    }
                    return item
                })

                updateCart([...updatedCart]);
                

            }else{
                const newItem = {
                    quantity : quantity,
                    id : id,
                    product : product
                }
                updateCart([...cart,newItem])
            }
    }


export function deleteFromCart(cart,updateCart,id){
    const updatedCart = cart.filter((item)=>{
        return item.id!=id;
    })
    updateCart(updatedCart);
}

export const calTotal = (cart)=>{
    return cart.reduce((total,item)=>{
        return total+(item.quantity) * (item.product.price);
    },0)
}

export const getQuantity = (cart,id)=>{
    let exists = cart.find((item)=>{
                return item.id==id;
    })
    if(exists) return exists.quantity;
    return 1;
}