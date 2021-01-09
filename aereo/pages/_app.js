import Nav from '../src/components/nav'
import '../styles/globals.css'
import { Provider } from 'next-auth/client'


function MyApp({ Component, pageProps }) {
  return(
  // <Provider session={pageProps.session}>
  <div>
    <Nav />
    <Component {...pageProps}/>
    </div>
  )
    // </Provider>
}

export default MyApp
