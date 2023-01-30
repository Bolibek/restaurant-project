import {Link} from "react-router-dom";
export default function Header(){
  return(
    <nav className="header">
      <div className="navbar">
        <Link to="/" className="left ">React</Link>
        <ul id="" className="right ">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}