import { Link } from 'react-router-dom'
import './Buttons.css'

const LoginButton = (props) => {
  return (
    <div className="button login">
      <Link to="/login">{props.children}</Link>
    </div>
  )
}

const RegisterButton = (props) => {
  return (
    <div className="button register">
      <Link to="/register">{props.children}</Link>
    </div>
  )
}

const InputSubmit = (props) => {
  return (
    <div className="button InputSubmit">
      <input type="submit" value={props.children}/>
    </div>
  )
}

export default LoginButton;
export {RegisterButton , InputSubmit}