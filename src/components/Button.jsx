export default function Button({ type="button", onClick , size="md", variant="primary", children }){
    let style ='text-white active:scale-90';

    if(variant=="primary") style+=' bg-black'
    if(size=="sm") style+=' px-2 '
    if(size=="md") style+=' px-4 py-2'
    
    return <button onClick={(e)=>{
        if(type=="button"){
            e.preventDefault();
            onClick();
        }
    }} className={style}>{children}</button>

}