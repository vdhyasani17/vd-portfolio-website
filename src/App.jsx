import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import LinksCard from './components/LinksCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-700/30 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/20 shadow-2xl animate-fade-in hover:border-yellow-700/20 transition-all duration-300 hover:shadow-3xl grid gap-8'>
        <ProfileCard />
        <LinksCard />
      </div>

    </>
  )
}

export default App
