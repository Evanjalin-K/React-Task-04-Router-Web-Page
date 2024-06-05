import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Fsd from "./pages/Fsd";
import Ds from "./pages/Ds";
import Cs from "./pages/Cs";
import Career from "./pages/Career";
import Home from "./pages/Home";
import "./App.css"
import All from "./pages/All";
import Footer from "./pages/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <All/>
      },
      {
        path: "/fullstackdevelopement",
        element: <Fsd/>
      },
      {
        path: "/datascience",
        element: <Ds />
      },
      {
        path: "/cybersecurity",
        element: <Cs />
      },
      {
        path: "/career",
        element: <Career />
      },
    ],
  }
]);


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;

