import './App.css';
import Header from './components/front';
import SideBar from './components/sidebar';
import React from 'react';
import { Menu } from '@styled-icons/feather/Menu';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Skills from './components/skills';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [on, setOn] = React.useState(false);

  const handleOn = () => {
    setOn(!on);
  };
  return (
    <div className="App">
      <aside className={on ? 'to-right' : ''}>
        <a href="#" onClick={handleOn}>
          <Menu size="35" />
        </a>
      </aside>
      {on && <SideBar openClass="open" />}
      <Router>
          <Routes>
            <Route path="/" element={<Header/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/skills" element={<Skills/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
