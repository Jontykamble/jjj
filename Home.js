import React, { useState ,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'


function Home() {

  const [fooditem,setFooditem]=useState([])
  const [foodcat,setFoodCat]=useState([])
  const[search,setSearch]=useState([])
  



  const loadData=async()=>{
    let response=await fetch("https://ziiiii.onrender.com/api/displayData",{method:"GET",
  headers:{
    'Content-Type':'application/json'
  }})

  response= await response.json()
  setFooditem(response[0])
  setFoodCat(response[1])

  }


useEffect(()=>{


  loadData()
},[])















  return (
    <div>
        <div>
            <Navbar/>
        </div>
        
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{"objectFit":"contain !important"}}>
    <div className="carousel-inner" id='carosel'>
        <div className='carousel-caption' style={{zIndex:"10"}}>
        <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
        setSearch(e.target.value)
      }}/>
      
    </div>
        </div>
      <div className="carousel-item active">
        <img src='https://source.unsplash.com/random/300x300/?burger' className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/300x300/?cake" className="d-block w-100" style={{filter:"brightness(30%)"}}alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/300x300/?cafe" className="d-block w-100"style={{filter:"brightness(30%)"}} alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden" style={{color:'crimson'}}>Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
        </div>
        
        <div className='container'>
          {fooditem !=[]
          ?fooditem.map((data)=>{
            return(<div className='row mb-3'>
              <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
              <hr />
              {fooditem!=[]? fooditem.filter((item)=>(item.CategoryName==data.CategoryName)&& (item.name.includes(search)))
              .map(filterItem=>{
                return(
                  <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                    <Card fooditem={filterItem}
                     options={filterItem.options}
                    >
                     

                    </Card>
                  </div>
                )

              }):<div>No such found</div>}

              </div>

            )
          }):<div>""</div>}
           
           
        </div>
      
        <div><Footer/></div>
    </div>
  )
}

export default Home