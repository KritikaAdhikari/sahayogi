import './NavBar.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav >
        <img src={logo} alt=" " className='logo' />
        <ul>
          <li>
            <Link to={"/"} className='btn'>Home</Link>
          </li>
          <li>
            <Link className='btn'>AboutUs</Link>
          </li>
          <li>
            <Link className='btn'>Contact</Link>
          </li>
          <li>
            <Link className='btn'>Services</Link>
          </li>
          <li><Link to={'/login'} className='btn'>Login</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar