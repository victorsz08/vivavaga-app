import { useContext } from "react"
import { RoutesApp } from "./routes/routes"
import { AuthContext } from "./context/context"

function App() {
  const value = useContext(AuthContext);

  console.log(value);

  return (
      <RoutesApp/>
  )
}

export default App
