import InputForm from '../InputForm'
import './Contact.css'

const Contact = ()=>{
    return(
        <form className='contact'>
            <InputForm label='Nome' id='name' placeholder='insira seu nome completo'/>
            <InputForm label='email' id='email' placeholder='qual seu melhor e-mail de contato? '/>
            <textarea></textarea>
            <button>Enviar</button>
        </form>
    )
}

export default Contact