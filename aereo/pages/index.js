
import Nav from '../components/nav'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <div>
<Nav/>
      <div className="py-20">
        <h1 className="text-5xl text-center text-black dark:text-white font-black">
          The planet doesn't need saving,
        <span className="text-5xl text-center text-white dark:text-white font-black">
          you do!
        </span></h1>
      </div>
      {/* <Image
        src="https://i.imgur.com/3hpncHZ.jpg"
        alt=""
        layout='fill'
      /> */}
    </div>
  )
}
