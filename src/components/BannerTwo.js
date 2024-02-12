import React from 'react'
import styled from "styled-components";
const Wrapper = styled.div`
 height:100vh;
 background-color:#131313;
.confused{
   
   display:flex;
  
   img{
   width:86%;
   margin-top:240px;
   color:white;
        margin-left:50px;
        padding-top:20px;
        @media (min-width: 768px) {
           width:70%;
           margin-left:230px;
           height:40vh;
           margin-top:400px;
        }
        @media (min-width: 1024px) {
           width:80%;
           margin-left:230px;
           height:50vh;
           margin-top:400px;
        }
        @media (min-width: 1200px) {
           width:30%;
           margin-top:180px;
           margin-left:890px;
    
           
        }
  
   }
   .alisha{
    margin-top:390px;
    position:absolute;
    margin-left:27px;

    @media (min-width: 375px) {
            margin-top:470px;
        }
    @media (min-width: 768px) {
            margin-top:700px;
            margin-left:70px;
        }
    @media (min-width: 1024px) {
            margin-top:900px;
            margin-left:70px;
        }
    @media (min-width: 1200px) {
            margin-top:390px;
            margin-left:70px;
        }
        
    h2{
        font-size:15px;
        line-height:30px;
        font-weight:900;
        color:#ffff;
        @media (min-width: 768px) {
            font-size:25px;
        }
        @media (min-width: 1200px) {
            font-size:38px;
            
        }
       
    }
    p{
        color:#ffff;
        line-height:30px;
        @media (min-width: 768px) {
            margin-top:25px;
            font-size:28px;
        }
        @media (min-width: 1200px) {
            font-size:47px;
            font-weight:100;
        }
    }
    button{
        border-radius:0px 0px 20px 0px;
        background-color:#D90E17;
        border:none;
        color:white;
        height:60px;
        width:200px;
        flex-shrink:0;
        margin-top:15px;
        @media (min-width: 768px) {
            margin-top:36px;
            height:50px;
            width:220px;
            font-size:15px;
            
        }
    }
   }
}


`



function BannerTwo() {
  return (
    <Wrapper>
        <div className='confused'>
            <div className='alisha'>
        
      <h2>Find out how it works</h2>
      <p>Hassle-free global calling</p>
      <button>SIGN UP FREE AND EASY</button>
    
      </div>
      <img  src="./images/Asset 1@2x 1.png" alt="" />
      </div>
     


    </Wrapper>
  )
}

export default BannerTwo;