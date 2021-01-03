import Link from 'next/link';




const links = [
  { href: '/about', label: 'about'},
  { href: '/more', label: 'more'},
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/">
            <a className="text-white no-underline text-accent-1 text-lg font-bold dark:text-white ">
              <img class="h-14 w-28" src="https://i.imgur.com/kAHwJY0.png" alt="" />
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label}) => (
            <li key={`${href}${label}`}>
              <a href={href}>
                 {label}
              </a>
            </li>
          ))}
        </ul>
       
       
      </ul>
    </nav>
  )
}
