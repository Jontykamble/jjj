import React from 'react'
import { UseDispatchcart,Usecart } from './ContextReducer'
import "./style.css"









function Card(props) {
  let dispatch=UseDispatchcart()
  let data=Usecart()



  const handleAddCart=async()=>{
    await dispatch({type:"ADD",id:props.fooditem._id,name:props.fooditem.name,price: props.fooditem.finalPrice})
console.log(data)

  }


  return (

    
  // <div> <div className='card mt-3' style={{"width":"18rem" ,"maxHeight":"360px"}}>
  // 
  // <h3 >Title</h3>
  // <div className='container w-100 '>
  //     
  // <select className='m-2 h-100  bg-success'>
  //     {Array.from(Array(6),(e,i)=>{
  //         return(
  //             <option key={i+1} value={i+1} >{i+1}</option>
  //         )

  //     })}
  // </select>
  // 
  // <select className='m-2 h-100  bg-success '>
  //     
  //     <option value="half">Half
  //         </option> 
  //         <option value="full">full
  //         </option></select> <p className='d-inline  fs-5'>Total Price 500</p>
  // </div>
  // 
 


  //</div></div>











  

//<div>
//  <div><div className="card fs-3 m-4 ">
//        <img src={props.fooditem.img}
//className="card-img " alt="..." style={{height:"120px",objectFit:"fill"}}/>
//<div className='card-body'>
//
//<button className={`btn btn-success justify-center  `} onClick={handleAddCart}>Add</button>
//<h5 className="card-title">{props.fooditem.name}</h5>
//</div>
//
//



          
          

   //</div>
          
     //   </div>
     // </div>







     <div class="main">
     <div class="cont">
         <div class="imgContainer">
             <img src={props.fooditem.img} alt=""/>
         </div>
         <div class="inner"> 

             <h3>{props.fooditem.name}</h3>
            
         </div>
         <div class="inner2">
             <label for="qt">Select Quantity:</label>
         <select name="qt" id="qt">
             <option value="1">
                 1
             </option>
             <option value="2">
                 2
             </option>
             <option value="3">
                 3
             </option>
         </select>
         <hr/>
         <div >
         <button  className="btn btn-success "onClick={handleAddCart}>Add</button>


         </div>
       
         </div>
     </div>

</div>




      
    

    
   
  )
}

export default Card
//<img src={props.fooditem.img}