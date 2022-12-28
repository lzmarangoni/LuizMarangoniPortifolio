import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import Description from './components/Description';
import Menu from './components/Menu';
import MenuBar from './components/MenuBar';
import Projects from './components/Projects';


function App() {
  
  const[showMenu, setShowMenu] = useState(false);

  const change = ()=>{
      setShowMenu(!showMenu)
      console.log(showMenu) 
  }


  return (
    <div className="App">
        <div className='lateralBar'>
          <MenuBar onClick={change}/>
          {showMenu === true  &&
          <Menu />}
        </div>
        {showMenu === false ? 
          <div className='contentArea'>
          <Description/>
          <Projects/> 
          </div>
         : <div className='contentAreaBlur'>
          <Description/>
          <Projects/> 
          </div>}
    </div>
  );
}

export default App;
