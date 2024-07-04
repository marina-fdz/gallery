import { Link } from "react-router-dom"
import Search from "./Search"


function Menu({ search, setSearch, types}) {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Work</Link></li>
            <li>{<Search search={search} setSearch={setSearch} types={types}/>}</li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
    
  )
}

export default Menu