export default function Button({ type="button", onClick , size="md", variant="primary", children, custom="" }){
    let style ='text-white active:scale-90';

    if(variant=="primary") style+=' bg-black'
     if(variant=="secondary") style+=' bg-accent-primary'
    if(size=="sm") style+=' px-1 py-1 '
    if(size=="md") style+=' px-4 py-2'

    style+=" "+custom
    
    return <button onClick={(e)=>{
        if(type=="button"){
            e.preventDefault();
            onClick();
        }
    }} className={style}>{children}</button>

}