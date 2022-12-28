import './MenuBar.css'
import {AiOutlineMenu} from 'react-icons/ai'




const MenuBar = (props)=>{
  
    

    return(
        <div className='MenuBar'>
            <AiOutlineMenu size={50} onClick={props.onClick} />
        </div>
    )

}

export default MenuBar