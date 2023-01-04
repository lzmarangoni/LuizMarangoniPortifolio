import InputForm from '../InputForm'
import './Contact.css'

const Contact = ()=>{
    return(
        <form className='contact'>
            <InputForm label='Nome' id='name' placeholder='insira seu nome completo'/>
            <InputForm label='E-mail' id='email' placeholder='qual seu melhor e-mail de contato? '/>
            <textarea placeholder='Aqui você pode enviar propostas de trabalho, sugestões de alterações nos codígos postados em meu GitHub e tambem fazer conexões...'></textarea>
            <button>Enviar</button>
        </form>
    )
}

export default Contact