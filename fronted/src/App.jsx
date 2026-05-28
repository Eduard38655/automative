import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
const SingUpPage = lazy(() => import("@/Pages/SingUpPage.jsx"))
const LoginPage = lazy(() => import("@/Pages/LoginPage.jsx"))
const Inventory = lazy(() => import("@/Pages/InventoryPage.jsx"))
const MenuBar = lazy(() => import("@/Components/OthersComp/SideBarMenu.jsx"))
const FeacturesCar = lazy(() => import("@/Pages/FeacturesCar.jsx"))
const 
DashboardPage = lazy(() => import("@/Pages/DashboardPage.jsx"))


 
function App() {


  return (
    <>
      <Routes>
        <Route path="/Signup" element={<SingUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<DashboardPage />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:CarID" element={<FeacturesCar />} />
      </Routes>
    </>
  )
}

export default App
