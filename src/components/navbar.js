import { Link } from "react-router-dom"

function NavigationBar(){
    return(
        <header>
            <h1>Dad Jokess</h1>

            <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/usestate">UseState</Link>
          </li>
          <li>
            <Link to="/jokes">Contact</Link>
          </li>
        </ul>
        </header>
    )
}

export default NavigationBar