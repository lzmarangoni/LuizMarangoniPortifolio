import './Container.css'

const Container = (props)=>{
    return(
        <section className='Container'>
            {props.children}
        </section>
    )
}

export default Container