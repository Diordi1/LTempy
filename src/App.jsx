import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'flowbite-react'
import SideBar from './SideBar'
import MainBar from './Main/MainBar'
import RightSideBar from './RightSideBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex  mx-auto'>
      <SideBar/>
      <MainBar/>
      <RightSideBar/>
    </div>
  )
}

export default App
