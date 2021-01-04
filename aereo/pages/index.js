
import Nav from '../src/components/nav'
import Image from 'next/image'
import Buttonz from '../src/components/button'


export default function IndexPage() {
  return (
    <div>
      <div className="py-20">
        <h1 className="text-5xl text-center text-black dark:text-white font-black">
            The planet doesn't need saving,
            <span className="text-5xl text-center text-white dark:text-white font-black">
                you do!
            </span></h1>
        <h2 className="py-4 text-2xl text-center font-light dark:text-white">
          Climate action is the best insurance plan for your future
        </h2>
        <div className="flex items-center justify-center p-8 space-x-4">
            <Buttonz text="Take Action" onClick="/"/>
          <Buttonz text="Tell me more" onClick="/"/>
        </div>
      </div>
      

      </div>
      // {/* <Image
      //   src="https://i.imgur.com/3hpncHZ.jpg"
      //   alt=""
      //   layout='fill'
      // /> */}
   
  )
}
