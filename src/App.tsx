import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import LikeButton from "./components/LikeButton"
import useMousePosition from "./hooks/useMousePosition"

const App = () => {
  const [show, setShow] = useState(true)
  const positions = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button
            onClick={() => {
              //将组件销毁
              setShow(!show)
            }}
          >
            Toggle
          </button>
        </p>
        {/* 条件渲染组件
        {show && <MouseTracker></MouseTracker>} */}
        <p>
          X:{positions.x} | Y:{positions.y}
        </p>
        <LikeButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
