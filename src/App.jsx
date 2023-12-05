import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import EventsPage from './pages/EventsPage'
import EventsFormPage from './pages/EventsFormPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'


function App() {
  return (
        <BrowserRouter>
          
          <Routes>
            <Route path='/' element={< HomePage />} /> 
            <Route path='/login' element={< LoginPage />} /> 
            <Route path='/register' element={< RegisterPage />} /> 

           
              <Route path='/events' element={< EventsPage />} /> 
              <Route path='/add-event' element={< EventsFormPage />} /> 
              <Route path='/events/:id' element={< EventsFormPage />} /> 
              <Route path='/profile' element={< ProfilePage />} /> 
          </Routes>
        </BrowserRouter>
  )
}

export default App