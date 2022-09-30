import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  const signed = true
  return signed ? (
    <Routes>
      <Route path='' element={<Layout />}></Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  ) : (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<Navigate to='/register' />} />
    </Routes>
  )
}

const Layout = () => {
  return (
    <div className='App'>
      <Home />
      <Outlet />
    </div>
  )
}

export default App
