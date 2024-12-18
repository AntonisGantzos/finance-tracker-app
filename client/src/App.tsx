import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'
import Authentication from './pages/auth/authentication'
function App() {

  return (
    <>
      <Router>
          <div className='app-container'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/auth' element={<Authentication />} />
            </Routes>
          </div>
      </Router>
    </>
  )
}

export default App
