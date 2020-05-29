import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import LikeButton from "./components/LikeButton"
import MouseTracker from "./components/MouseTracker"

const App = () => {
  const [show, setShow] = useState(true)
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
