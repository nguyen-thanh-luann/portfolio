import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ProjectScreen from './screens/ProjectScreen'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/aboutme' element={<AboutScreen />} />
        <Route path='/projects' element={<ProjectScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
