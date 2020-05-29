import React, { useState, useEffect } from "react"

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log("add effort", positions.x)
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener("click", updateMouse)
    //返回值是一个函数，可以在内部设置销毁动作
    return () => {
      console.log("remove effort", positions.x)
      document.removeEventListener("click", updateMouse)
    }
  })

  console.log("before render", positions.x)

  return (
    <p>
      X:{positions.x} | Y:{positions.y}
    </p>
  )
}

export default MouseTracker
