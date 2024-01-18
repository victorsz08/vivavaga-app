import { useContext } from "react"
import { RoutesApp } from "./routes/routes"
import { AuthContext } from "./context/context"
import { Navigate, useNavigate } from "react-router-dom";

function App() {
  const { auth } = useContext(AuthContext);
  
  return (
      <RoutesApp/>
  )
}

export default App
