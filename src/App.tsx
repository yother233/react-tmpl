import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)
  let name: string
  name = "Yother"
  return (
    <div>
      Hello,world
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)} >Increment</button>
      <div>My name is {name}</div>
    </div>
  )
}

export default App