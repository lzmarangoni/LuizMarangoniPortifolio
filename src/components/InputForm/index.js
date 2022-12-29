import './InputForm.css'

const InputForm = (props)=>{
    return(
        <div className='inputForm'>
                <label from={props.id}>{props.label}</label>
                <input id={props.id} placeholder={props.placeholder}></input> 
        </div>
    )
}

export default InputForm