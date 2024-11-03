import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from '.src/components.jsx/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  )
}

export default App
