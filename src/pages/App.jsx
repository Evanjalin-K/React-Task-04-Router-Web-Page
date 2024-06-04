import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Nav from "../pages/Nav"
import Home from "../pages/Home"

const router = createBrowserRouter([
  {
path: "/",
element: <Home />
  },
{
  path: "/nav",
  element: <Nav/>
}

])
const App = () => {
  return <RouterProvider router={router}/>
}

export default App