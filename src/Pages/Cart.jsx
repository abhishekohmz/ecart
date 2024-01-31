import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slice/cartSlice'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Cart() {

  const dispatch = useDispatch()

  const cartArray=useSelector((state)=>state.cartReducer)
  const [total,setTotal]=useState(0)
const navigate=useNavigate()
  const getTottal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((a,b)=>a+b))
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
getTottal()
  },[cartArray])


  const handleCart=()=>{
    dispatch(emptyCart())
    alert('order placed succesfully,Thank you for purchasing')
    navigate('/')
  }
  return (
    
    <>
    
    
          
          <Row style={{marginTop:'100px'}}>
            <Col className='ps-5' lg={8}>
            <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>id</th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Prize</th>
                <th>Remove</th>
              </tr>
            </thead>
            
            <tbody>
            {
        cartArray.length>0?
        cartArray.map((products,index)=>(
<tr>
<td>{index}</td>
<td>{products.title}</td>
<td><img className='immg img-fluid' src={products.thumbnail} style={{height:150,width:200,padding:'30px'}} alt="" /></td>
<td>{products.price}$</td>
<td style={{paddingRight:'-100px'}}><button onClick={()=>dispatch(removeFromCart(products.id))} className='btn'><i style={{ color: 'red' }} className="fa-solid fa-trash fs-5 "></i></button></td>
</tr>
     )):<p>nothing to display</p>
    }
            </tbody>
         
   
       </Table>
            </Col>
            <Col className='pe-5' lg={4}>
              <div style={{backgroundColor:'lightgrey'}} className='d-flex flex-column align-items-center border rounded pt-3 pb-3 mb-5'>
                <h2>Cart Summary</h2>
                <h3> total  Product: <span style={{color:'red'}}>{cartArray.length}</span></h3>
                <h3>total Amount: <span style={{color:'red'}}>{total}</span></h3>
                <div className='d-flex justify-content-center'>
                <Button style={{backgroundColor:'cyan',color:'black'}} onClick={()=>handleCart()} >Check Out</Button>

                </div>
              </div>
            </Col>
          </Row>
      
    </>
  )
}

export default Cart