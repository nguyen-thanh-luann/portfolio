import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ProjectScreen from './screens/ProjectScreen'
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/aboutme' element={<AboutScreen />} />
          <Route path='/projects' element={<ProjectScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
