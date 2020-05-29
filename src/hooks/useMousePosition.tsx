import React, { useState, useEffect } from "react"

//注意，自定义hook必须以use开头进行命名
const useMousePosition = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log("add effort")
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener("mousemove", updateMouse)
    //返回值是一个函数，可以在内部设置销毁动作
    return () => {
      console.log("remove effort")
      document.removeEventListener("mousemove", updateMouse)
    }
  }, [])
  //返回state
  return positions
}

export default useMousePosition
