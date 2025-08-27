export default function Input({ type="text",label, onChange, value }){
    return <div className="flex flex-col gap-2">
            <label
            className="text-sm font-medium" 
            htmlFor={label}>{label}</label>
            <input
            onChange={(e)=>{
                onChange(e);
            }}
            value={value}
            className="border-1 px-2 py-1 border-accent-primary rounded-sm outline-accent-primary  focus:bg-[#D0CBF7]"

            type={type} id={label} />
         </div>
}
