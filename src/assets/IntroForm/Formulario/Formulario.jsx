import './Formulario.css'
import Input from "../Input/Input"
import Button from "../Button/Button";
import MessageTerm from '../MessageTerm/MessageTerm';

const Formulario = () => {
    return (
        <form>
            <Input type="text" placeholder="First Name"/>
            <Input type="text" placeholder="Last Name"/>
            <Input type="email" placeholder="Email Address"/>
            <Input type="password" placeholder="Password"/>

            <Button buttonName={"CLAIM YOUR FREE TRIAL"} />
            <MessageTerm link={"Terms and service"}/>
        </form>
    )
}

export default Formulario;