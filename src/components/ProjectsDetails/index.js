import "./ProjectDetails.css"

const ProjectDetails = (props)=>{
    return(
        <section className="details">
            <h2>{props.name}</h2>
            <img src={props.image}/>
            <p>{props.description} </p>
            <a href={props.linkCode}>Acessar o Código</a>
            <a href={props.linkApp}>Acessar a aplicação</a>
            
           
        </section>
    )
}

export default ProjectDetails