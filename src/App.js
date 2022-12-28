import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
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
          {showMenu === true  ?
          <div>
            <Menu />
            <div className='contentAreaBlur'>
              <Description/>
              <Projects/> 
              <Contact/>
            </div> 
          </div> :  
            <div className='contentArea'>
            <Description/>
            <Projects/> 
            <Contact/>
          </div> 
        }
        </div>
       
        
    </div>
  );
}

export default App;
