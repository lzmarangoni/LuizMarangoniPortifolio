import './InputForm.css'

const InputForm = (props)=>{
    return(
        <div className='inputForm'>
            <input id={props.id} placeholder={props.placeholder}></input> 
            <label from={props.id}>{props.label}</label>
        </div>
    )
}

export default InputForm