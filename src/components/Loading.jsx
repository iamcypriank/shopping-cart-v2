export default function loading( { color="accent-primary " }){
     return (
    <div className="flex items-center justify-center w-full h-full">
      <div className={`w-6 h-6 border-3 border-${color} border-t-transparent rounded-full animate-spin`}></div>
    </div>
  );
}