import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import useURLLoader from "./hooks/useURLLoader"
import LikeButton from "./components/LikeButton"
//告诉编译器返回数据的类型
interface IShowResult {
  message: string
  status: string
}

const App: React.FC = () => {
  const [show, setShow] = useState(true)
  const [
    data,
    loading,
  ] = useURLLoader("https://dog.ceo/api/breeds/image/random", [show])
  const dogResult = data as IShowResult

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <LikeButton></LikeButton>
          <button
            onClick={() => {
              //将组件销毁
              setShow(!show)
            }}
          >
            Refresh dog photo
          </button>
        </p>
        {/* 条件渲染组件
        {show && <MouseTracker></MouseTracker>} */}
        {loading ? (
          <p>读取中</p>
        ) : (
          <img src={dogResult && dogResult.message}></img>
        )}
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
