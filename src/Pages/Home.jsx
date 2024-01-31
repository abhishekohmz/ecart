import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './Home.css'
import { addToWishList } from '../redux/slice/wishlistSlice'
import { useDispatch } from 'react-redux'
import useFetch from '../Hooks/useFetch'
import { addToCart } from '../redux/slice/cartSlice'

function Home() {

  const fetch = useFetch('https://dummyjson.com/products')
  console.log(fetch);
const dispatch=useDispatch()


  return (
    <>
      <Row id='row' className='row pe-5 ps-5'>
        {
          
          fetch?.length>0.?fetch?.map((products,index)=>(
<Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card id='card' style={{ width: '18rem' }}>
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
                <Button className='btn btn-light' onClick={()=>dispatch(addToWishList(products))}><i style={{ color: 'red' }} className="fa-solid fa-heart fs-5 "></i></Button>
                <Button id='btn' className='btn' onClick={()=>dispatch(addToCart(products))}><i style={{ color: 'black' }} className="fa-solid fa-cart-shopping fs-5"></i>add to cart</Button>

              </div>
            </Card.Body>
          </Card>
        </Col>
          )):<p>nothing to display</p>
          }
      </Row>
    </>
  )
}

export default Home