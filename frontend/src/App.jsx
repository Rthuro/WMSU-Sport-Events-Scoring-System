import Events from "./pages/Events";
import Sports from "./pages/Sports";
import Departments from "./pages/Departments";
import Layout from "./Layout"
import Home from "./pages/Home"
import {HashRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
      <Router>
        <Routes>
          <Route  element={<Layout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Events' element={<Events/>}></Route>
            <Route path='/Sports' element={<Sports/>}></Route>
            <Route path='/Departments' element={<Departments/>}></Route>

            {/* <Route path='/Projects/:projectName' element={<ProjectPage/>}></Route> */}
          </Route>
        </Routes>
      </Router>
    )
}

export default App