import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import OrderHistory from "./pages/OrderHistory"
import FeedbackForm from "./pages/FeedbackForm"
import ChefDashboard from "./pages/ChefDashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-center" />
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/feedback/:orderId" element={<FeedbackForm />} />
            <Route path="/chef-dashboard" element={<ChefDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  )
}

export default App
