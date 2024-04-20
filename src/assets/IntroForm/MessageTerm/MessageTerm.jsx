import './MessageTerm.css'

const MessageTerm = ({link}) =>{
    return (
        <>
        <section className='sla'>
        <p>By clicking the button, you are agreeing</p>
        <a href="#">{link}</a>
        </section>
    
        </>
    )
}

export default MessageTerm;