import { useRef } from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import ProjectDetails from '../ProjectsDetails'
import './Projects.css'

const Projects = ()=>{

    const carousel = useRef(null)
    const projectsItems = [
        {
            name:'escalaTite',
            img:'../images/escalaTite.png',
            description:'Projeto desenvolvido em react, tem como modelo um organograma dando a possibilidade dos usuários "corneteiros" escalarem a sua seleção inserindo o nome, escolhendo a posição de atuação e foto dos jogadores escalados.',
            linkCode:'https://github.com/lzmarangoni/escala_tite-organograma-',
            linkApp:'https://escala-tite-organograma.vercel.app/'
        },
        {
            name:'Formulário de Segmentos',
            img:'../images/formularioDeSegmentos.png',
            description:'Projeto consome API pública do IBGE permitindo que o usuário selecione qual o ramo de atividade de sua empresa em uma das etapas de cadastro de uma aplicação voltada para empreendedores.',
            linkCode:'https://github.com/lzmarangoni/api-segmentos',
            linkApp:'https://formulario-de-segmentos.vercel.app/'
        },
        {
            name:'To Do APP ',
            img:'../images/todoApp.png',
            description:'Aplicação desenvolvida em javascript puro, com intenção de melhorar os conhecimentos em js. Possui modo noturno e é responsivo.',
            linkCode:'https://github.com/lzmarangoni/todo-app',
            linkApp:'https://todo-app-silk-nine.vercel.app/'
        },
        {
            name:'E-Commerce',
            img:'../images/ecommerce.png',
            description:'Modelo de e-commerce desenvolvido com HTML, Css e Js. Um dos primeiros projetos que realizei usando display flex e construção de versão mobile.',
            linkCode:'https://github.com/lzmarangoni/ecommerce_alura_geek',
            linkApp:'https://ecommerce-alura-geek.vercel.app/'
        },
        {
            name:'Site institucional',
            img:'../images/barbearia.png',
            description:'Meu primeiro projeto, feito com HTML e CSS. Ideia do projeto foi criar um site institucional onde conta com a história do estabelecimento, alem de conter informações de localização, vídeos dos cortes, serviços disponíveis e formulário de contato.',
            linkCode:'https://github.com/lzmarangoni/site-barbearia-alura',
            linkApp:'https://site-barbearia-alura-psi.vercel.app/'
        }
    ]

    const moveLeft = (e)=>{
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
        
    }

    const moveRight= (e)=>{
        e.preventDefault()
        console.log(carousel.current.scrollLeft)
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return(
        <section className='projects'>
            <h1>Projetos</h1>
            <p>Aqui estão alguns dos meus projetos</p>
            <div className='carousel' ref={carousel}>
                {projectsItems.map(item =>
                     <ProjectDetails
                        key={item.linkCode} 
                        name={item.name}
                        image={item.img}
                        description={item.description}
                        linkCode={item.linkCode}
                        linkApp={item.linkApp}
                />)}
            </div>
            <div className='buttons'>
                    <button onClick={moveLeft}><AiOutlineLeft size={40}/></button>
                    <button onClick={moveRight}><AiOutlineRight size={40}/></button>
                </div>
        </section>
    )
}

export default Projects 