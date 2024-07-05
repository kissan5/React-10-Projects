import { createBrowserRouter ,RouterProvider } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Dashboard/components/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/transactions",
    element: <Transactions />
  },
  {
    path: "/support",
    element: <Support />
  },
]);


function App() {
  
  return (
    <>
    <RouterProvider router={router} />
      <Dashboard/>
    </>
  )
}

export default App
