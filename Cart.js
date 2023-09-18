import React from 'react'
import { UseDispatchcart, Usecart } from '../components/ContextReducer'


export default function Cart() {

    let data=Usecart()
    let dispatch=UseDispatchcart()
    if(data.length===0){

  
    return (
        <div>
            <div className='m-5 w-100 text-center fs-3'> The cart is Empty</div>
        </div>


    )}

      
    

    return (

        
        <div><div className='container m-auto mt-5 table-responsive table-sm'></div>
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
              <td > </td>
            </tr>
          </thead>
          <tbody>
          {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0"></button> </td></tr>
            ))}
           
          </tbody>
          
        </table>
       
        </div>
       
    )
    }


