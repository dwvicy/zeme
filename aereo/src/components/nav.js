import Link from 'next/link'

const links = [
  { href: '/about', label: 'about' },
  { href: '/tracker', label: 'tracker' },
  { href: '/action', label: 'action' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/">
            <a className="text-white no-underline text-accent-1 text-lg font-bold dark:text-white ">
              <div className=" border border-white">
                <p className="px-4 py-2 text-white font-bold">aereor</p>
              </div>
            </a>
          </Link>
        </li>
        <div className="text-white border border-white shadow-lg">
          <ul className="px-4 py-2 flex items-center justify-between space-x-4">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </nav>
  )
}
