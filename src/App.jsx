import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Receipts from "./components/Receipts";
import Preview from "./components/Preview";
import FinalReceipt from "./components/FinalReceipt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Receipts />
  },
  // {
  //   path: "/edit",
  //   element: <Editform />
  // },
  // {
  //   path: "/preview",
  //   element: <Preview />
  // },
  // {
  //   path: "/final",
  //   element: <FinalReceipt />
  // }
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


