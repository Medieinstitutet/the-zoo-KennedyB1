import { Link } from "react-router-dom"

export const Header = () => {

    return <header>
        <Link to={`/`}><button className="headerButton"><h3>Home</h3></button></Link>
        <Link to={`/animals`}><button className="headerButton"><h3>Animals</h3></button></Link>
    </header>

}