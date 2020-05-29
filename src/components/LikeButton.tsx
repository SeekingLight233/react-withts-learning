import React, { useState, useEffect, useRef, useContext } from "react"
import useMousePosition from "../hooks/useMousePosition"
import { ThemeContext } from "../App"

const LikeButton: React.FC = () => {
  //es6的解构赋值，不是ts专门的语法
  const [like, setLike] = useState(0) //The useState() returns a stateful value, and a function to update it.
  //定义一个“及时响应的data”
  const likeRef = useRef(0)
  const [on, setOn] = useState(true)
  const didMountRef = useRef(false)
  const positions = useMousePosition()
  const domRef = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)
  const style = {
    background: theme.background,
    color: theme.color,
  }
  useEffect(() => {
    //组件渲染完成之后，传进来的func会被执行
    console.log("document title effect is running")

    document.title = `点击了${like}次`
  }, [like, on]) //监听like的变化来添加effect

  //利用useRef来实现组件注册生命周期
  useEffect(() => {
    if (didMountRef.current) {
      console.log("this is updated")
    } else {
      didMountRef.current = true
    }
  })

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  })
  function handleAlertClick() {
    setTimeout(() => {
      alert(" u click on" + likeRef.current)
    }, 3000)
  }
  return (
    <div>
      <input type="text" ref={domRef}></input>
      <button
        style={style}
        onClick={() => {
          setLike(like + 1)
          likeRef.current++ //这里的值可以动了，但是不会触发render
        }}
      >
        {like}点赞
      </button>
      <button onClick={handleAlertClick}>Alert!</button>
    </div>
  )
}

export default LikeButton
