import React, { useState } from "react"

const LikeButton: React.FC = () => {
  //es6的解构赋值，不是ts专门的语法
  const [like, setLike] = useState(0) //The useState() returns a stateful value, and a function to update it.
  const [on, setOn] = useState(true)
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
