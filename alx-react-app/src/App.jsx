import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
        <UserProfile name="Ruby Chelsea" age={30} bio="Software developer and art enthusiast" />
      </div>
    </>
  )
}

export default App;
