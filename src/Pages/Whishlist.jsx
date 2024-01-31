import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'


function Whishlist() {

  const wishlistArray=useSelector((state)=>state.wishlistReducer)
const dispatch=useDispatch()

const handleWishlistCart=(products)=>{
  dispatch(addToCart(products))
  dispatch(removeFromWishlist(products.id))
}

  return (
    <>
    <Row className='pe-5 ps-5' style={{marginTop:'200px'}}>
      {
        wishlistArray.length>0?
        wishlistArray.map((products,index)=>(
          <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{height:'150px',width:'250px',marginLeft:'20px',marginTop:'15px',borderRadius:'30px'}} variant="top" src={products.thumbnail}/>
            <Card.Body>
<div>
<Card.Title style={{color:'black',WebkitTextStrokeWidth:'.5px',WebkitTextStrokeColor:'cyan',fontSize:'15px'}}>{products.title}</Card.Title>
<div style={{color:'black'}} className='border rounded border-primary ps-3 w-50'>
  Price: {products.price}/-
</div>
</div>
              <Card.Text style={{textAlign:'left',color:'black', marginTop:'20px'}}>
                {products.description.slice(0,55)}
              </Card.Text>
              <div className='d-flex justify-content-evenly'>
                <Button  onClick={()=>dispatch(removeFromWishlist(products.id))} className='btn btn-light'><i style={{ color: 'red' }} className="fa-solid fa-trash fs-5 "></i></Button>
                <Button className='btn btn-light' onClick={()=>handleWishlistCart(products)}><i style={{ color: 'black' }} className="fa-solid fa-cart-shopping fs-5">Add To Cart</i></Button>

              </div>
            </Card.Body>
          </Card>
        </Col>
        )): <div className='d-flex justify-content-center w-100 flex-column align-items-center mb-5'>
          <img style={{height:'200px'}} className='img img-fluid' src="https://www.pngmart.com/files/11/Family-Shopping-PNG-File.png" alt="nothing to display" />
          <h3>Wishlist is empty</h3>
          <Link style={{color:'darkgreen',fontWeight:'bold'}} className='btn btn-primary' to={'/'}>Back to home</Link>
        </div>
      }
    </Row>
    </>
  )
}

export default Whishlist