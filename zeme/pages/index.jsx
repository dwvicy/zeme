/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { useColorMode } from 'theme-ui'

export default props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
  <div sx={{ height: `calc(100vh - 60px)`}}>
        <header>
  <button
    onClick={e => {
      setColorMode(colorMode === 'default' ? 'dark' : 'default')
    }}>
    Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
  </button>
</header>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>This is a really dope note taking app.</h1>
  
    </div>

  </div> 
 
)
}
<style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Poppins;
  }

  * {
    box-sizing: border-box;
  }
`}</style>
  