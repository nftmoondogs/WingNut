import { useState } from 'react'
import logo from './assets/logo.gif';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg'>
        <div className='gradient'></div>
      </div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='buttons'>
          <a href='https://x.com/wingnuttoken' className='icon'><FontAwesomeIcon icon={faTwitter} /></a>
          <a href='https://t.me/wingnuttoken' className='icon'><FontAwesomeIcon icon={faTelegram} /></a>
          <a href='https://pump.fun'>Buy on Pump.Fun</a>
        </div>
      </header>
      <main>
        <div className='side-by-side'>
          <img src={img1} alt='img1' />
          <div className='text-block to-left'>
            <h1>$Wingnut is BOSS</h1>
            <p>Trust me with your money and you ain’t gotta pay tax</p>
            <p>if you think you can snipe $Wingnut, that’s the only shot you gonna get</p>
            <p>When someone asks you about Wingnut….’YES’</p>
            <div className='buttons'>
              <a href='https://pump.fun/board'>Buy on Pump.Fun</a>
            </div>
          </div>
        </div>
        <div className='side-by-side reverse-on-mobile'>
          <div className='text-block to-right'>
            <h2>$Wingnut is FUN</h2>
            <p>Just spilled coffee all over myself. Great, now I look even more caffeinated.</p>
            <p>do you wanna know why i put my hand in my pockets almost all the time. i got jeeters in my pockets, preventing them from reaching out to your funds</p>
            <p>What’s my favorite color?…..money 💰 !</p>
            <div className='buttons'>
              <a href='https://x.com/wingnuttoken' className='icon'><FontAwesomeIcon icon={faTwitter} /></a>
              <a href='https://t.me/wingnuttoken' className='icon'><FontAwesomeIcon icon={faTelegram} /></a>
            </div>
          </div>
          <img src={img2} alt='img2' />
        </div>
        <div className='centered'>
          <div className='text-block'>
            <h2>You need to know about $Wingnut</h2>
            <p>First date tip; Be yourself and don’t be a jeet. sucks alot</p>
            <p>My colleagues would describe me as a 'go-getter' with a strong emphasis on the 'go.</p>
          </div>
        </div>
      </main>
      <footer>
        <p>©2024 $Wingnut</p>
      </footer>
    </>
  )
}

export default App
