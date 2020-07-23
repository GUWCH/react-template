// function组件

import React, { useState, useEffect } from 'react'

export function FunctionClocker(props) {
  const [date, setDate] = useState(new Date())
  // 相当于componentDidMount,componentDidUpdate,componentDidUnmount 三个周期
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, []) // 附加依赖项，当值改变时重新执行内部函数，空默认不执行
  return <div>{date.toLocaleTimeString()}</div>
}
