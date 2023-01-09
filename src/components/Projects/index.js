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
            description:'Projeto desenvolvido em react, tem como modelo um organograma dando a possibilidade dos usuários "corneteiros" escalaram a sua seleção inserindo o nome, escolhendo a posição de atuação e foto dos jogadores escalados.',
            linkCode:'https://github.com/lzmarangoni/escala_tite-organograma-',
            linkApp:'https://escala-tite-organograma.vercel.app/'
        },
        {
            name:'escalaTite',
            img:'../images/escalaTite.png',
            description:'Projeto desenvolvido em react, tem como modelo um organograma dando a possibilidade dos usuários "corneteiros" escalaram a sua seleção inserindo o nome, escolhendo a posição de atuação e foto dos jogadores escalados.',
            linkCode:'https://github.com/lzmarangoni/escala_tite-organograma-',
            linkApp:'https://escala-tite-organograma.vercel.app/'
        },
        {
            name:'escalaTite',
            img:'../images/escalaTite.png',
            description:'Projeto desenvolvido em react, tem como modelo um organograma dando a possibilidade dos usuários "corneteiros" escalaram a sua seleção inserindo o nome, escolhendo a posição de atuação e foto dos jogadores escalados.',
            linkCode:'https://github.com/lzmarangoni/escala_tite-organograma-',
            linkApp:'https://escala-tite-organograma.vercel.app/'
        },
        {
            name:'escalaTite',
            img:'../images/escalaTite.png',
            description:'Projeto desenvolvido em react, tem como modelo um organograma dando a possibilidade dos usuários "corneteiros" escalaram a sua seleção inserindo o nome, escolhendo a posição de atuação e foto dos jogadores escalados.',
            linkCode:'https://github.com/lzmarangoni/escala_tite-organograma-',
            linkApp:'https://escala-tite-organograma.vercel.app/'
        },
        {
            name:'escalaTite',
            img:'../images/escalaTite.png',
            description:'Projeto desenvolvido em react, tem como modelo um organograma dando a possibilidade dos usuários "corneteiros" escalaram a sua seleção inserindo o nome, escolhendo a posição de atuação e foto dos jogadores escalados.',
            linkCode:'https://github.com/lzmarangoni/escala_tite-organograma-',
            linkApp:'https://escala-tite-organograma.vercel.app/'
        }
    ]

    const moveLeft = (e)=>{
        e.preventDefault()
        carousel.current.scrollRight -= carousel.current.offsetWidth;
        
    }

    const moveRight= (e)=>{
        e.preventDefault()
       
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