import React, { useEffect, useState } from 'react'
import Quadrado from './Quadrado'


function Tabuleiro({imagensTabuleiro}) {
   
  
  return (
    
    <div className='row d-flex justify-content-center    border border-danger tabuleiro'>
        {
            imagensTabuleiro.map((img,index) =>{
               return (
                <div className='col-2'>
                <Quadrado img={img} index={index} quantidadeCartas={imagensTabuleiro.length}/>
                </div>
             
               )
            })
        }
         
           
        
       
    </div>
  )
}

export default Tabuleiro