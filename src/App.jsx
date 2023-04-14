import './App.css'
import Counter from './components/counter/Counter'
import ColorButtons from './components/ColorButtons'
import Colors from './components/Colors'
import { useState } from 'react'
import List from './components/List'
import Navbar from './components/Navbar'
import ColorButtons2 from './components/part2/ColorButtons2'
import Colors2 from './components/part2/Colors2'
import Counter2 from './components/part2/Counter2'
import BackTotheTop from './components/BackTotheTop'
import WidthSetter from './components/part2/WidthSetter'
import WidthAgent from './components/part2/WidthAgent'

function App() {
  const [color, setColor] = useState(null)

  return (
    <div className="App" id="top">
      <Navbar />
      <div id="part1" className="parts">
        <h1>Part 1</h1>
        <h2>1. React install, vite, code splitting, css modules</h2>
        <div className="card">
          <Counter />
        </div>
        <h2>2. React state, state lifting</h2>
        <div>
          <ColorButtons setColor={setColor} />
          <Colors color={color} />
        </div>
        <h2>3. fetch, map</h2>
        <List />
        <BackTotheTop />
      </div>
      <div id="part2" className="parts">
        <h1>Part 2: redux</h1>
        <p>handling state in the background</p>
        <p>in the project folder, install redux: npm i redux, then: npm run dev</p>
        <p>create store.js, import and export createStore, create a reducer function</p>
        <ul>store functions:
          <li>store.getstate(),</li>
          <li>store.subscribe(),</li>
          <li>store.dispatch(obj: type: '...', payload:'...')</li>
        </ul>
        <ColorButtons2 />
        <Colors2 />
        <br />
        <Counter2 />
        <br />
        <WidthSetter />
        <WidthAgent />
        <BackTotheTop />
      </div>
    </div>
  )
}

export default App
