import Link from 'next/link';

export default function Buttonz({text, onClick}){
    return(
        
        <Link href={onClick}>
            
                <button
                    className="bg-transparent hover:bg-green-100">
                        <div className=" border border-white shadow-lg">
                    <p className="px-6 py-2 font-bold text-lg text-white hover:text-black">{text}</p>
                    </div>
                </button>
            
        </Link>
        
    )
}