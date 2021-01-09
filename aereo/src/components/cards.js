import Link from 'next/link'

export default function Cardz({img, url}){
    return(
        
            <Link href={url}>
               <div className=" hover:transform scale-100 transition duration-400 in-expo hover:bg-white transform hover:-translate-y-1 hover:scale-100 space-y-2 border border-white shadow-lg px-2 py-2 sm:px-8 py-10 hover: shadow-2xl">
                   <img className="" src={img}></img>
                   
                  
               </div>
            </Link>
      
    )
}