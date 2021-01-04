import Cardz from "../src/components/cards";

export default function About(){
    return(
        <div className="mx-10 my-30 space-y-6">
       
        <h1 className="text-5xl font-black text-white">
            aereor. Your personal SDG tracker.
        </h1>
        <h1 className="text-xl font-bold text-white">
            Be mindful of your contributions towards a sustainable future.
        </h1>
        <h1 className="text-xl font-light text-white">
            Listed below are some of the <span className="text-yellow-100 font-bold">2030 sustainable developement<br></br>
             goals</span> that we can contribute to on an individual level.
        </h1>
        <div class="my-24 grid mx-6 h-1/3 md:mx-10 grid-col-1 md:grid-flow-row md:grid-rows-4 md:grid-cols-4  gap-2">
        <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Climate Action" url="/" />
        <Cardz img="https://i.imgur.com/sAnJwvN.png" title="Quality Education" url="/" />
        <Cardz img="https://i.imgur.com/vlS0MRe.png" title="Gender Equality" url="/" />
        <Cardz img="https://i.imgur.com/v6IBT8L.png" title="Clean water & Sanitization" url="/" />
        <Cardz img="https://i.imgur.com/zNnpl0a.png" title="Responsible Consumption & Production" url="/" />
        <Cardz img="https://i.imgur.com/02nkda2.png" title="Reduced Inequlities" url="/" />
        <Cardz img="https://i.imgur.com/btbUB6S.png" title="Good Health and Well-being" url="/" />
        <Cardz img="https://i.imgur.com/0q23AJm.png" title="Zero Hunger" url="/" />
        <Cardz img="https://i.imgur.com/DaicXrX.png" title="Life below water" url="/" />
        <Cardz img="https://i.imgur.com/PvRtdoM.png" title="Life on land" url="/" />

        






  {/* <div class="">
    <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Climate Action" url="/" />
  </div>
  <div class="">
    <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Quality Education" url="/" />
  </div>
  <div class="">
    <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Gener Equality" url="/" />
  </div>
  <div class="">
    <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Clean water & Sanitization" url="/" />
  </div>
  <div class="">
    <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Reduced Inequlities" url="/" />
  </div>
  <div class="">
    <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Resposible Consumption & Production" url="/" />
  </div>
  <div class="">
    <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Zero Hunger" url="/" />
  </div>
  <div class="">
    <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Life on land" url="/" />
  </div>
  <div class="">
    <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Life below water" url="/" />
  </div>
  <div class="">
    <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Good Health & Well-being" url="/" />
  </div> */}
  {/* <div class="my-3 px-4 h-1/3 w-1/5 overflow-hidden sm:my-3 sm:px-4 sm:w-full md:my-3 md:px-4 md:w-full lg:my-3 lg:px-4 lg:w-1/5 xl:my-3 xl:px-4 xl:w-1/5">
    <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Card1"  url="/" />
  </div> */}

  

  </div>
  </div>

// {/* </div>
//     <div className="flex flex-row items-center justify-center space-x-4">
//        <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Card1"  url="/" />
//        <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Card1"  url="/" />
//        <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Card1"  url="/" />
//        </div>
//        <br></br>
//     <div className="flex flex-row items-center justify-center space-x-4">
//        <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Card1"  url="/" />
//        <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Card1"  url="/" />
//        <Cardz img="https://i.imgur.com/nhEyJ6x.png" title="Card1"  url="/" />
       
//     </div> */}
   
    )
}