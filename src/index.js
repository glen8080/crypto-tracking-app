
import React, { useEffect, useState } from 'react'

import { createRoot } from 'react-dom/client';
import './app.css'

import  myImage from './images/images.png'

  




        

function App(){
   const [seed ,setSeed] = useState("")
   
   const [search,setSearch] = useState("")
   const [trigger,setTrigger] = useState("")
   const [store,setStore] = useState([])
   const [final,setFinal] = useState("")

    useEffect(()=>{
        fetchData()
    },[final])

    useEffect(()=>{
      
      setSeed(Math.floor(Math.random()*5000))
      

    },[])

     const fetchData = () =>{
          fetch(`https://api.coingecko.com/api/v3/search?query=${search}`)
          .then(response =>{
            return response.json()
             } ) 
          .then(response =>{
            setStore(response.coins)
          }) 

     }


    const handleChange = (event) =>{
       setSearch(event.target.value)
    }

  


     const handleSubmission = (event) =>{
       event.preventDefault()
       setTrigger(search)
       setFinal(trigger)
       
     }
   return(
    
    <div className='whole_container'>
        <div className="header">
             <div className="logo">
         
             <img src={myImage} alt="big"/>
         
             </div>
            <div className="search_box">
               <div className="avatar_container">
                  <img className='avatar' src={`https://avatars.dicebear.com/api/human/:${seed}.svg`} alt="avatar" />
                  <h2 className='title'>Crypto Tracking App</h2>
               </div>
               
                 <form onSubmit={handleSubmission}  >
                    <input type="text" onChange={handleChange} value={search}/>
                     <button type='submit'>Search</button>
                 </form>
               

           </div>
        </div>
      <div className="detail">
         <div className='heading'>
           
           <h5>IMAGE</h5>
           <h5>NAME</h5>
           <h5>SYMBOL</h5>
           <h5>MARKET CAP RANK</h5>
         </div>

      
         {store.map((item,index)=>{
            return <div key={index} className="content">
                   <div className='imageDiv'><img src={item.thumb} alt="symbol" className='pic' /></div>
                   <p>{item.name}</p>
                   <p>{item.symbol}</p>
                   <p>{item.market_cap_rank}</p>
            </div>
         })}
        

      </div>
    </div>
   )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);