import React, { useState, useEffect } from "react"

const LikeButton: React.FC = () => {
  //es6的解构赋值，不是ts专门的语法
  const [like, setLike] = useState(0) //The useState() returns a stateful value, and a function to update it.
  const [on, setOn] = useState(true)
  useEffect(() => {
    //组件渲染完成之后，传进来的func会被执行
    document.title = `点击了${like}次`
  })
  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1)
        }}
      >
        {like}点赞
      </button>
      <button
        onClick={() => {
          setOn(!on)
        }}
      >
        {on ? "ON" : "OFF"}
      </button>
    </div>
  )
}

export default LikeButton
