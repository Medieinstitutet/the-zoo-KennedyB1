import { Link } from "react-router-dom"

export const Header = () => {

    return <>
        <Link to={`/`}><h3>Home</h3></Link>
        <Link to={`/animals`}><h3>Animals</h3></Link></>

}