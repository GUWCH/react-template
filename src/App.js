import React, { useState } from 'react'
import './App.css'
import IndexPage from './pages/IndexPage'
import CartPage from './pages/CartPage'
import OrderListPage from './pages/OrderListPage'
import UserPage from './pages/UserPage'
import BottomNav from './components/BottomNav'

function App() {
  const [activenum, setActivenum] = useState(0)
  return (
    <div className="App">
      {activenum == 0 ? <IndexPage /> : ''}
      {activenum == 1 ? <CartPage /> : ''}
      {activenum == 2 ? <OrderListPage /> : ''}
      {activenum == 3 ? <UserPage /> : ''}
      <BottomNav activenum={activenum} setActivenum={setActivenum} />
    </div>
  )
}

export default App
