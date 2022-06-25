import { Navbar, Container, Nav} from 'react-bootstrap'
import CartWidget from './CartWidget'
const NavBar = () => {
    const objStyle = { fontSize: 30}
    return(
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home" style={objStyle}>D-SHIRT</Navbar.Brand>
          <Nav className="me-auto" style={objStyle}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#produtos">Productos</Nav.Link>
            <Nav.Link href="#talles">Talles</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#envio">Envio</Nav.Link>
          </Nav>
          </Container>
          <CartWidget />
        </Navbar>
       </>
      )
}


export default NavBar