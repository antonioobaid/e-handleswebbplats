import { Outlet } from "react-router-dom"
import AuthContextProvider from "../contexts/authContext"


function Rootlayout() {
  
    return (
    <div>
      <AuthContextProvider>
        <Outlet />
      </AuthContextProvider>
    </div>
  )
}
export default Rootlayout