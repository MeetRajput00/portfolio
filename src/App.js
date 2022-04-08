import './App.css';
import Header from './components/front';
import SideBar from './components/sidebar';
import React from 'react';
import { Menu } from '@styled-icons/feather/Menu';

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
      <Header/>
    </div>
  );
}

export default App;
