import Link from 'next/link';

export default function Buttonz({text, onClick}){
    return(
        
        <Link href={onClick}>
            
                <button
                    className="bg-transparent hover:bg-green-100 hover:shadow-xl hover:transform scale-100 transition duration-400 in-expo hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
                        <div className=" border border-white shadow-lg">
                    <p className="px-6 py-2 font-bold text-lg text-white hover:text-black">{text}</p>
                    </div>
                </button>
            
        </Link>
        
    )
}