import Link from 'next/link'

export default function Cardz({img, url}){
    return(
        
            <Link href={url}>
               <div className=" space-y-2 border border-white shadow-lg px-2 py-2 sm:px-8 py-10">
                   <img className="" src={img}></img>
                   
                  
               </div>
            </Link>
      
    )
}