import { Navbar, Container, Nav} from 'react-bootstrap'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
    const objStyle = { fontSize: 30}
    return(
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <NavLink to='/' style={objStyle}>D-SHIRT</NavLink>
          <Nav className="me-auto" style={objStyle}>
            <NavLink to='/categoria/home' className={({isActive})=> isActive ? 'unaClase' : 'Otraclase '}>Home</NavLink>
            <NavLink to='/categoria/productos' className={({isActive})=> isActive ? 'unaClase' : 'Otraclase '}>Productos</NavLink>
            <NavLink to='/categoria/talles' className={({isActive})=> isActive ? 'unaClase' : 'Otraclase '}>Talles</NavLink>
            <NavLink to='/categoria/contacto' className={({isActive})=> isActive ? 'unaClase' : 'Otraclase '}>Contacto</NavLink>
            <NavLink to='/categoria/envio' className={({isActive})=> isActive ? 'unaClase' : 'Otraclase '}>Envio</NavLink>
          </Nav>
          </Container>
          <Link to='/cart'>
              <CartWidget />
          </Link>
  
        </Navbar>
       </>
      )
}


export default NavBar