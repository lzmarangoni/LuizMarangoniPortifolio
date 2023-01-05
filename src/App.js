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
      
        }


  return (
    <div className="App">
        <div className='lateralBar'>
          <MenuBar onClick={change}/>
        </div>
          {showMenu === true  && 
          
            <Menu /> }

        <div className='contentArea'>
              <div id='sobre'>
              <Description />
              </div>
              <div id='projetos'>
              <Projects /> 
              </div>
              <Projects /> 
              <div id='contato'>
              <Contact />
                </div>
        </div>
        
       
        
    </div>
  );
}

export default App;
