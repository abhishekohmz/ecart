import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Header() {
  const wishlist=useSelector((state)=>state.wishlistReducer)
  const cart=useSelector((state)=>state.cartReducer)
  return (
    <>
    <Navbar expand="lg" style={{zIndex:1}} className='bg-dark position-fixed top-0 w-100'>
      <Container>
        <Navbar.Brand className='fs-4'><Link to={'/'} style={{textDecoration:'none',color:'cyan',fontSize:'30px',}}> <img width={50} src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG66.png" alt="" /> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto fs-5">
            <Nav.Link ><Link style={{textDecoration:'none',color:'lightcyan'}} to={'/wishlist'}><i style={{color:'red'}} class="fa-solid fa-heart"></i>Wishlist
            <Badge className='border rounded bg-dark ms-2 mb-2'>{wishlist.length}</Badge>
            </Link></Nav.Link> 
            <Nav.Link className='item' ><Link style={{textDecoration:'none',color:'lightcyan'}} to={'/cart'}><i class="fa-solid fa-cart-shopping"></i>Cart
            <Badge className='border rounded bg-dark ms-2'>{cart.length}</Badge>
            </Link></Nav.Link> 

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header