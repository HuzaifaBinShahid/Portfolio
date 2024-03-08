import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/projects' element={< Projects />}></Route>
      </Routes>
    </>
  );
}

export default App;
