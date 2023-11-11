import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';

import Intro from './Intro';
import Navbar from './Navbar';

const App = () => {
    return (
        <Router>
          {/* <Intro /> */}
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </Router>
    )
}

export default App;