import Router from "./routers/route"
import Framework from "./framework"

function App() {
  return (
    <>
      <div>路由最外层</div>
      <Framework>
        <Router />
      </Framework>
    </>
  )
}

export default App