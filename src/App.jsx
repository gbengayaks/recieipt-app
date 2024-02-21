import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Receipts from "./components/Receipts";
import Preview from "./components/Preview";
import Editform from "./components/Editform";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Receipts />
  },
  {
    path: "/edit",
    element: <Editform />
  },
  {
    path: "/preview",
    element: <Preview />
  }
]);

function App() {

  return (
    <>
      <div className="bg-slate-100 border-2">
        <RouterProvider router= {router} />
      </div>  
    </>
  )
}

export default App


