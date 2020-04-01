import React, { useState, useEffect } from 'react'
import './App.css'
import layer6 from './assets/img/layer-6.png'
import layer1 from './assets/img/layer-1.jpg'
import layer3 from './assets/img/layer-3.jpg'
import layer4 from './assets/img/layer-4.jpg'

const Superior = () => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(true)
  }, [])
  return (
    <div className={`superior ${active ? 'active' : ''}`}>
      <div className="superiorTitle">Advertising & Design</div>
      <div className="superiorSubtitle">The perfect solution</div>
    </div>
  )
}

const Inferior = () => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(true)
  }, [])
  return (
    <div className={`inferior ${active ? 'active' : ''}`}>
      <div className="inferiorInner">
        <div className="inferiorWrapper">
        ...98% of the world's population still sees advertising as an expense and not as an investment.
        </div>
      </div>
    </div>
  )
}

const Menu = () => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(true)
  }, [])
  return (
    <div className={`menuWrapper ${active ? 'active' : ''}`}>
      <div className="menu">
        <div className="menuItem"></div>
        <div className="menuItem">
          <div className="menuItemInner">About Us</div>
        </div>
        <div className="menuItem">
          <div className="menuItemInner active">Services</div>
        </div>
        <div className="menuItem">
          <div className="menuItemInner">Portfolio</div>
        </div>
        <div className="menuItem">
          <div className="menuItemInner">Contact</div>
        </div>
      </div>
    </div>
  )
}

const Site = () => {
  const [showSuperior, sethowSuperior] = useState(false);
  const [showInferior, sethowInferior] = useState(false);
  const [showMenu, sethowMenu] = useState(false);
  useEffect(() => {
    sethowMenu(true);
    setTimeout(() => {
      sethowSuperior(true)
    }, 1000);
    setTimeout(() => {
      sethowInferior(true)
    }, 1500);
  }, [])
  return (
    <div className="appContainer">
    {/* Superior */}
    {
      showSuperior ? <Superior /> : <div />
    }

    {/* Menu */}
    {
      showMenu ? <Menu /> : <div />
    }

    {/* Footer */}
    { 
      showInferior ? <Inferior /> : <div />
    }

  </div>
  );
}

function App() {

  const [images] = useState([
    {
      id: 1,
      uri: layer6
    },
    {
      id: 2,
      uri: layer1
    },
    {
      id: 3,
      uri: layer3
    },
    {
      id: 4,
      uri: layer4
    }
  ])

  let [count, setCount] = useState(0)

  useEffect(() => {

    // setInterval(() => {
    //   console.log(count)
    //   if (count === images.length - 1) {
    //     setCount(0)
    //   } else {
    //     setCount(count++)
    //   }
    // }, 1000)
  }, [count])

  return (
    <div className="App" style={{ backgroundImage: `url(${images[0].uri})` }}>
      <div className="sevenVector"></div>
      <Site />
    </div>
  )
}

export default App
