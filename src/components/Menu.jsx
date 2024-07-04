import { Link } from "react-router-dom"
import Search from "./Search"


function Menu() {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Work</Link></li>
            <li>{<Search/>}</li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
    
  )
}

export default Menu